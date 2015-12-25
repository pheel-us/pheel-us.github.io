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

  var population      =  7349472099,
      birthsPerYear   = birthRate * population,
      deathsPerYear   = deathRate * population,
      birthsPerSecond = birthsPerYear / secondsInAYear,
      deathsPerSecond = deathsPerYear / secondsInAYear;

  console.log('birthsPerSecond:', birthsPerSecond)
  console.log('deathsPerSecond:', deathsPerSecond)

  var $map             = $('.map'),
      mapWidth         = 0,
      mapHeight        = 0;

  var $continents      = $('.continents'),
      continentsCtx    = $continents[0].getContext('2d'),
      continentsWidth  = $continents.width(),
      continentsHeight = $continents.height(),
      scaleFactor      = 4.0;

  var $people = [];


  function loadContinentsImage() {
    var continentsImage = new Image()
    continentsImage.onload = function() {
      continentsCtx.drawImage(continentsImage, 0, 0);

      updateMapSizing()
      startSimulation()
    }
    continentsImage.src = './continents.svg'
  }

  function updateMapSizing() {
    mapWidth  = continentsWidth * scaleFactor
    mapHeight = continentsHeight * scaleFactor

    $map.width(mapWidth)
    $map.height(mapHeight)
    // $map.attr('width',  mapWidth)
    // $map.attr('height', mapHeight)
  }


  var simulationInterval;

  function startSimulation() {
    // Render one-ten-millionth of the population
    var portion = population / 10000000,
        births  = [];

    for (var i = 0; i < portion; i++) {
      births.push(createBirth(false))
    }
    $map.append(births.join("\n"))

    simulationInterval = window.setInterval(tickSimulation, 1000)
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

    var pixelImageData = continentsCtx.getImageData(x, y, 1, 1)

    // var r = pixelImageData.data[0],
    //     g = pixelImageData.data[1],
    //     b = pixelImageData.data[2],
    var a = pixelImageData.data[3];

    // Don't let it place on places that aren't filled in (ie. have land)
    return (a < 31)
  }

  function performBirths(birthsCount) {
    var births = []

    for (var i = 0; i < birthsCount; i++) {
      births.push(createBirth(true))
    }

    $map.append(births.join("\n"))
  }

  function createBirth(animate) {
    var xRand = Math.random(),
        yRand = Math.random();

    while(cannotPlaceInMap(xRand, yRand)) {
      xRand = Math.random()
      yRand = Math.random()
    }

    var x     = (mapWidth * xRand)  - 2,
        y     = (mapHeight * yRand) - 2,
        klass = (animate ? ' birthing' : ''),
        style = 'left: '+x+'px; top: '+y+'px;';

    return '<div class="person'+klass+'" style="'+style+'"><span></span></div>'
  }

  function performDeaths(deathsCount) {
    function performDeath() {
      var $people = $('.person:not(.young):not(.dying)'),
          $person = $($people[Math.floor(Math.random() * $people.length)])

      $person.addClass('dying')

      setTimeout(function() { $person.remove() }, 500)
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


  loadContinentsImage()
});
