# Text generater generates text using  
# a hidden Markov model.

text = File.read("example.txt")
words = text.scan(/\S+/)

p words.size
p words.uniq.size


h = Hash.new(0)
words.each{|word|
  h[word] += 1
}
p h.sort_by{|a,b|b}.reverse.take(25)

hmm = Hash.new{|hash,key|hash[key]=[]}
words.each_cons(2){|a,b|hmm[a] << b}
hmm[words.last] << words.first
# p hmm

class Array
  def sample
    self.shuffle.first
  end
end

text = ""
word = hmm.keys.grep(/\.$/).sample
400.times do
  word = hmm[word].sample
  text << word << " "
  # word = hmm.keys.sample if rand < 0.01
end
p text

