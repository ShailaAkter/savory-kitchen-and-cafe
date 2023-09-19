import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Featured from '@/components/Featured'
import Hero from '@/components/Hero/Hero'
import Offer from '@/components/Offer/Offer'
import OurTeam from '@/components/OurTeam'
import Reservation from '@/components/Reservation'
import SignatureDish from '@/components/SignatureDish'


export default function Home() 
{
  return (
    <main>
      <Hero/>
      <AboutUs/>
      <Featured/>
      <Offer/>
      <OurTeam/>
      <SignatureDish/>
      <Reservation/>
      <ContactUs/>
    </main>
  )
}
