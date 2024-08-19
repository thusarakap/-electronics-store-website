import { Card, CardContent } from "@components/ui/card";
import Link from "next/link";
import { MailOpenIcon, PhoneIcon, LinkIcon } from "@components/ui/icons";

export function MapWithLinks() {
  return (
    <section id="contact" className="py-12 md:py-24 contactanimation">
            <div className="container mx-auto px-4 md:px-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Feel free to reach out to me if you have any questions :)
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="h-24 py-5">
                  <CardContent className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <MailOpenIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <a
                        href="mailto:thusaraka@yahoo.co.uk"
                        className="text-muted-foreground hover:underline"
                      >
                        thusaraka@yahoo.co.uk
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-24 py-5">
                  <CardContent className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <PhoneIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <a
                        href="tel:+94 (74) 120-2084"
                        className="text-muted-foreground hover:underline"
                      >
                        +94 (74) 120-2084
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-24 py-5">
                  <CardContent className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <LinkIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Social</h3>
                      <div className="flex items-center gap-2">
                        <Link
                          href="https://www.linkedin.com/in/thusaraka/"
                          className="text-muted-foreground hover:underline"
                          prefetch={false}
                        >
                          LinkedIn
                        </Link>
                        <Link
                          href="https://www.instagram.com/thusaraka/"
                          className="text-muted-foreground hover:underline"
                          prefetch={false}
                        >
                          Instagram
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <h3 className="text-foreground md:text-xl mt-6 font-semibold">
                Based in Kandy, Sri Lanka
              </h3>
              {/* Google Map Embed */}
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31660.211944009832!2d80.60518192285858!3d7.294587401966095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!5e0!3m2!1sen!2slk!4v1720556395989!5m2!1sen!2slk"
                  loading="lazy"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  aria-hidden="false"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </section>
  )
}