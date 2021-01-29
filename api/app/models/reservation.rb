class Reservation < ApplicationRecord
    after_create :notified_email_client
    belongs_to :voiture
    belongs_to :client
	def notified_email_client
		ClientMailer.payment_confirmed(self).deliver_now
	end
end
