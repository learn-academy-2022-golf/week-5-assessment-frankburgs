# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# A method that takes in an array of words and a single letter
def contains_letter(arrayWords, letter)

    # Create empty array
    arr1 = Array.new

    #Populate empty array with words that contain that letter
    arrayWords.each do |value|
        if value.include?(letter)
            arr1.push value
        end
    end

    #Return populated array
    return arr1

end

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
# p contains_letter(beverages_array, letter_o)
# Output: ["coffee", "soda water"]

letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
# p contains_letter(beverages_array, letter_t)
# Output: ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# Method that takes in a hash
def hash_to_array(hash1)

    # Create empty array
    arr1 = Array.new

    # Convert hash values to an array
    hash1.each do |key, value|
        arr1.push(value)
    end

    # Return array ordered alphabetically
    return arr1.flatten.sort
end

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 
# p hash_to_array(us_states)
# Output: ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# A class named Bike
class Bike

    # Initialized with model, wheels = 2, current_speed = 0
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    # A method named bike_info that returns a sentence with all the data from the bike object
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    # pedal_faster method should increase the speed by a given amount
    def pedal_faster(speed_increase)
        # Increase current speed by the argument
        @current_speed += speed_increase
    end

    # brake method decreases speed by given amount. Cannot go below 0 mph
    def brake(speed_decrease)

        # If reducing current speed by argument drops to negative values
        if (@current_speed - speed_decrease < 0)
            # Reduce to 0
            @current_speed = 0
        else
            # Decrease current speed by the argument
            @current_speed -= speed_decrease
        end

    end
end

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
my_bike = Bike.new('Trek')
# p my_bike.bike_info
#Output: "The Trek bike has 2 wheels and is going 0 mph."

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
p my_bike.pedal_faster(10)
# Output: 10

# Expected output example: my_bike.pedal_faster(18) => 28
p my_bike.pedal_faster(18)
# Output: 28

# Expected output example: my_bike.brake(5) => 23
p my_bike.brake(5)
# Output: 23

# Expected output example: my_bike.brake(25) => 0
p my_bike.brake(25)
# Output: 0