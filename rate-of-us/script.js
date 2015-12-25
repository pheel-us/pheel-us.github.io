$(function() {

  // Crude Birth Rate (CBR):
  //   Number of births over a given period divided by the person-years lived
  //   by the population over that period. It is expressed as average annual number of births per 1,000 population.
  // http://esa.un.org/unpd/wpp/DVD/Files/1_Indicators%20(Standard)/EXCEL_FILES/2_Fertility/WPP2015_FERT_F03_CRUDE_BIRTH_RATE.XLS
  //
  // Crude Death Rate (CDR):
  //   Number of deaths over a given period divided by the person-years lived
  //   by the population over that period. It is expressed as average annual
  //   number of deaths per 1,000 population.
  // http://esa.un.org/unpd/wpp/DVD/Files/1_Indicators%20(Standard)/EXCEL_FILES/3_Mortality/WPP2015_MORT_F02_CRUDE_DEATH_RATE.XLS

  // Total Population - Both Sexes:
  //   De facto population in a country, area or region as of 1 July of the
  //   year indicated. Figures are presented in thousands.
  // http://esa.un.org/unpd/wpp/DVD/Files/1_Indicators%20(Standard)/EXCEL_FILES/1_Population/WPP2015_POP_F01_1_TOTAL_POPULATION_BOTH_SEXES.XLS

  // Input is births per 1,000 people (population) per year, we're diving it
  // by 1,000 to get per-person.
  var birthRate = 19.587 / 1000,
      deathRate =  7.829 / 1000;

  var secondsInAYear = 365.25 * 24 * 3600;

  var population      = 7349472099,
      birthsPerYear   = birthRate * population,
      deathsPerYear   = deathRate * population,
      birthsPerSecond = birthsPerYear / secondsInAYear,
      deathsPerSecond = deathsPerYear / secondsInAYear;

  var tickRate = 1000
  // Adjust the per-second rate based on how often we're actually ticking
  birthsPerSecond *= (1000 / tickRate)
  deathsPerSecond *= (1000 / tickRate)

  console.log('birthsPerSecond:', birthsPerSecond)
  console.log('deathsPerSecond:', deathsPerSecond)

  var $map             = $('.map'),
      mapWidth         = 0,
      mapHeight        = 0,
      mapXPadding      = 40,
      mapYPadding      = 80;

  var $continents      = $('.continents'),
      continentsWidth  = $continents.width(),
      continentsHeight = $continents.height(),
      scaleFactor      = 4.0;


  function loadContinentsImage() {
    var continentsImage = new Image()
    continentsImage.onload = function() {
      var continentsCtx = $continents[0].getContext('2d')

      continentsCtx.drawImage(continentsImage, 0, 0);

      // Hide the map, then show it once the simulation has started up
      $map.css({opacity: 0})
      setTimeout(function() {
        updateForWindowSize()
        $map.css({opacity: 1})
      }, 100)

      updateMapSizing()
      startSimulation()
    }
    continentsImage.src = './continents.svg'
  }

  function updateMapSizing() {
    mapWidth  = continentsWidth * scaleFactor
    mapHeight = continentsHeight * scaleFactor

    // $map.attr('viewBox', '0 0 '+mapWidth+' '+mapHeight)

    // $map.width(mapWidth   + (mapPadding * 2))
    // $map.height(mapHeight + (mapPadding * 2))
    // $map.attr('width',  mapWidth)
    // $map.attr('height', mapHeight)
  }

  var simulationInterval;

  function startSimulation() {
    // Render a 2.5-millionth of the population
    var portion = population / 2500000;

    for (var i = 0; i < portion; i++) {
      performBirth(false)
    }

    simulationInterval = window.setInterval(tickSimulation, tickRate)
  }

  // NOTE: Since the births/deaths per second aren't whole integers, we
  //       accumulate the fractional part between ticks.
  var birthsAcc = 0,
      deathsAcc = 0;

  function tickSimulation() {
    var pair, births, deaths;

    pair      = updateRate(birthsPerSecond, birthsAcc)
    births    = pair[0]
    birthsAcc = pair[1]

    pair      = updateRate(deathsPerSecond, deathsAcc)
    deaths    = pair[0]
    deathsAcc = pair[1]

    performDeaths(deaths)
    performBirths(births)
  }

  function cannotPlaceInMap(xRand, yRand) {
    var x = Math.round(continentsWidth * xRand),
        y = Math.round(continentsHeight * yRand);

    var continentsCtx  = $continents[0].getContext('2d'),
        pixelImageData = continentsCtx.getImageData(x, y, 1, 1)

    // var r = pixelImageData.data[0],
    //     g = pixelImageData.data[1],
    //     b = pixelImageData.data[2],
    var a = pixelImageData.data[3];

    // Don't let it place on places that aren't filled in (ie. have land)
    return (a < 31)
  }

  function performBirths(birthsCount) {
    for (var i = 0; i < birthsCount; i++) {
      performBirth(true)
    }
  }

  function performBirth(animate) {
    var xRand = Math.random(),
        yRand = Math.random();

    while(cannotPlaceInMap(xRand, yRand)) {
      xRand = Math.random()
      yRand = Math.random()
    }

    var x              = (mapWidth * xRand)  - 1 + mapXPadding,
        y              = (mapHeight * yRand) - 1 + mapYPadding,
        klass          = 'person',
        translate      = 'translate('+x+', '+y+')',
        finalTransform = translate+' scale(1, 1)'

    var arc = d3.svg.arc()
      .innerRadius(0)
      .outerRadius(2)
      .startAngle(0)
      .endAngle(360 * (Math.PI/180))

    var group = d3.select('.map-people')
      .append('g')
      .attr('class', 'person'+(animate ? ' birthing' : ''))
      .attr('transform', finalTransform)
      // .attr('filter', 'url(#filter-shadow)')

    var path = group
      .append('path')
      .attr('class', 'person-detail')
      .attr('d', arc)

    setTimeout(function() { group.attr('class', 'person') }, 2000)
  }

  function performDeaths(deathsCount) {
    function performDeath() {
      var $people = $('.person:not(.birthing):not(.dying)'),
          $person = $($people[Math.floor(Math.random() * $people.length)])

      $person.attr('class', 'person dying')
      setTimeout(function() { $person.remove() }, 2000)
    }

    for (var i = 0; i < deathsCount; i++) { performDeath() }
  }

  // Takes a given rate and accumulator (see `birhtsAcc` above), return a
  // 2-array of the integer number of items to add & the updated accumulator.
  function updateRate(rate, acc) {
    var current        = rate + acc,
        integerCurrent = Math.floor(current);

    return [
      integerCurrent,
      current - integerCurrent
    ]
  }

  $(window).on('resize', updateForWindowSize);

  function updateForWindowSize() {
    var windowWidth  = $(window).width(),
        windowHeight = $(window).height()

    var minWidth  = mapWidth  + (mapXPadding * 2),
        minHeight = mapHeight + (mapYPadding * 2);

    var scale = Math.min(windowWidth / minWidth, windowHeight / minHeight, 1)
    // Convert to transform argument

    var bbox         = $('.map-people')[0].getBBox()
        actualHeight = (bbox.height + (mapYPadding * 2)) * scale,
        actualWidth  = (bbox.width  + (mapXPadding * 2)) * scale,
        topOffset    = (windowHeight - actualHeight) / 2,
        leftOffset   = (windowWidth  - actualWidth)  / 2;

    console.log(scale)

    $('.map-wrap').css({paddingTop: topOffset, paddingLeft: leftOffset})
    $('.map-people').attr('transform', 'scale('+scale+', '+scale+')');
  }

  function toggleWhatModal() {
    $('.wrap, .what-modal').toggleClass('what-modal-active')
  }

  $('.what-show').on('click', function(event) {
    event.preventDefault()
    toggleWhatModal()
  })

  $('.what-modal').on('click', function(event) {
    // Dismiss it if they clicked outside the centering box
    if(event.target == $('.what-modal')[0]) {
      toggleWhatModal()
    }
  })

  // Start it up!
  loadContinentsImage()
});
