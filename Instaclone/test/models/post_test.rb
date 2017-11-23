# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  img_url    :string           not null
#  author_id  :integer          not null
#  location   :string
#  caption    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
