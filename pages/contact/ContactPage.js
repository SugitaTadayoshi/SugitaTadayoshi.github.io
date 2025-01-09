const ContactCard = ({ title }) => {
  return (
    <div className="container mx-auto p-2 pt-3 md:p-3 lg:p-6 xl:p-12 aspect-square">
      {/* Dynamic Content */}
      <div className="relative h-full">
        <div className="space-y-10">
          {/* Title with special styling */}
          <div>
            <h1 className="text-white text-4xl font-extralight tracking-wider mb-2">
              {title}
            </h1>
            <div className="h-0.5 w-32 bg-gradient-to-r from-yellow-400 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactDetails = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-3 pt-24 pb-12">
        <div className="flex gap-4">
          <ContactCard title="Whatsapp">
            <h1 className="text-white text-4xl font-extralight tracking-wider mb-2">
              Whatsapp
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-4-6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
            </svg>
          </ContactCard>

          <ContactCard title="Email">
            <h1 className="text-white text-4xl font-extralight tracking-wider mb-2">
              Email
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 12H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V6h12v2z" />
            </svg>
          </ContactCard>

          <ContactCard title="Facebook">
            <h1 className="text-white text-4xl font-extralight tracking-wider mb-2">
              Facebook
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm3.4-7.3H14V9h-2.5v-1.5h-1v1.5H9v2.5h1v1.5h2.5V12h1v-2.5h2.5V9z" />
            </svg>
          </ContactCard>

          <ContactCard title="Instagram">
            <h1 className="text-white text-4xl font-extralight tracking-wider mb-2">
              Instagram
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-4-6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
            </svg>
          </ContactCard>
        </div>
      </div>
    </div>
  );
};
