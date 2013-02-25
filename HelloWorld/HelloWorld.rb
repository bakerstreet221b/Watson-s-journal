text = File.read("example.txt")
words = text.scan(/\S+/)
puts words