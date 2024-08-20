import { ContactForm } from "@/components/contactUs/ContactForm"
import { MapWithLinks } from "@/components/contactUs/MapWithLinks"

export default function ContactUs() {
  return (
    <div className="w-full">
        <h1 className="text-6xl font-bold text-center my-20">Contact Us</h1>
        <ContactForm />
        <MapWithLinks />
        </div>
  )
}
