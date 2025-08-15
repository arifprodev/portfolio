import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Me</h1>
        <div className="bg-white p-6 shadow rounded-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}