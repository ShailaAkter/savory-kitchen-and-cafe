import React from 'react'
import ContainerBox from './ContainerBox';
import Line from './Line';

const Faq = () => 
{
    const faqItems = [
        {
          question: '1. What are your opening hours?',
          answer: 'We are open from 8:00 AM to 11:00 PM every day of the week.'
        },
        {
          question: '2. Do I need a reservation?',
          answer: 'Reservations are recommended, especially during peak hours, but walk-ins are welcome.'
        },
        {
          question: '3. Can I order takeout or delivery?',
          answer: 'Yes, we offer takeout and delivery services. You can place your order online or call us.'
        },
        {
          question: '4. Do you have bkash or credit card payment?',
          answer: 'Absolutely! We have a all kinds of payment options at your service.'
        },
        {
          question: '5. Is there parking available?',
          answer: 'Yes, we have a parking lot for our customers.'
        },
        {
          question: '6. Can you accommodate dietary restrictions?',
          answer: 'We do our best to accommodate dietary restrictions. Please inform your server, and we will assist you.'
        },
      ];
    
  return (
    <ContainerBox>
    <section className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-2 text-rose-600">Frequently Asked Questions</h2>
        <Line/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-amber-950">{item.question}</h3>
              <p className="text-amber-950">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </ContainerBox>
  )
}

export default Faq