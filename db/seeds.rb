# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
9.times do |i|
    Quote.create(
      first_name: "Quote #{i + 1}",
      last_name: "Kanui",
      email: "testemail@test.com",
      number: "5 555 555 5555",
      project_info: '4 walls, 300 square feet, I want to paint them green and this is just a test so Im just going to ramble on',
    )
  end