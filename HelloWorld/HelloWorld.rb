text = File.read("https://github.com/bakerstreet221b/Watson-s-journal/blob/master/HelloWorld/HelloWorld.txt")
words = text.scan(/\S+/)
puts words