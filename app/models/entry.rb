class Entry < ApplicationRecord
  validates :word, presence: true, length: { minimum: 1 }
end
