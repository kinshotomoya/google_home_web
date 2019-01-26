require 'test_helper'

class LiffControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get liff_index_url
    assert_response :success
  end

end
