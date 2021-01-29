class ClientMailer < ApplicationMailer

	def payment_confirmed(reservation)
		@reservation = reservation
		@client = @reservation.client
		@voiture = @reservation.voiture
	    @url  = 'http://example.com'
	    mail(to: @client.email, subject: 'Votre reservation est confirmé')
	end
end
# ClientMailer.payment_confirmed(@reservation).deliver_now
