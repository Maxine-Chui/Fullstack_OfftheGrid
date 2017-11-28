# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  post_id    :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :post_id, :author_id, presence: true

  belongs_to :post,
  primary_key: :id,
  foreign_key: :post_id,
  class_name: :Post

  belongs_to :user,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

end
