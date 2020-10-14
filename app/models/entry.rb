class Entry < ApplicationRecord
  default_scope { order(created_at: :desc) }

  belongs_to :user
  
  validates :word, presence: true, length: { minimum: 1 }
end
