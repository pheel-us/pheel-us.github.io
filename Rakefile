require 'json'

directories = `find * -maxdepth 0 -type d`.strip.split /\s+/
directories.delete '_site'

desc 'Generate index'
task 'index' do
  File.open('index.json', 'w') do |f|
    f.write JSON.dump(directories)+"\n"
  end
end
