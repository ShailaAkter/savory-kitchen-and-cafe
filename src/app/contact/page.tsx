import ContactUs from '@/components/ContactUs'
import ContainerBox from '@/components/ContainerBox'
import Faq from '@/components/Faq'
import React from 'react'

const Contact = () => 
{
  return (
    <ContainerBox>
      <div className="py-16">
        <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-rose-600 mb-8">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Contact Details */}
          <div>
            <h3 className="text-xl font-semibold text-amber-950 mb-4">Contact Details</h3>
            <p className="text-amber-950 p-1">
              <strong>Address:</strong> 123 Gulshan, Dhaka, Bangladesh
            </p>
            <p className="text-amber-950 p-1">
              <strong>Phone:</strong> ++880 123 456-7890
            </p>
            <p className="text-amber-950 p-1">
              <strong>Email:</strong> info@savorykitchen.com
            </p>
            <p className="text-amber-950 p-1">
              <strong>Visiting Hours:</strong> <br />
              Friday - Saturday: 10:00 AM - 01:00 AM <br />
              Sunday - Thursday: 10:00 AM - 11:00 PM
            </p>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <div>
                <h3 className="text-xl font-semibold text-amber-950 mb-4">Other Information</h3>
                <p className="text-amber-950 p-1">
                  <strong>Reservation Policy:</strong> We accept reservations for parties of 6 or more. Please call ahead to reserve a table of book a table in online. Visit our homepage for booking details.
                </p>
                <p className="text-amber-950 p-1">
                  <strong>Special Events:</strong> Join us for live music every Friday night and special tasting events throughout the month.
                </p>
                <p className="text-amber-950 p-1">
                  <strong>Career Opportunities:</strong> Interested in joining our team? Email your resume to careers@savorykitchen.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs/>
      <Faq/>
    </ContainerBox>
  )
}

export default Contact