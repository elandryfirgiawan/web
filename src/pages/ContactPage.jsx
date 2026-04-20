import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ScrollToTopButton from '@/components/ScrollToTopButton.jsx';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'elandryfirgiawan@gmail.com',
      href: 'mailto:elandryfirgiawan@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Morowali, Indonesia',
      href: 'https://maps.app.goo.gl/732bwShREqbdM2YH8' // Google Maps link to location
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Elandry Firgiawan</title>
        <meta name="description" content="Get in touch for web development projects, IT support services, or technical consultation. I'm available for freelance work and collaboration opportunities." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <ScrollToTopButton />

        <section className="pt-24 md:pt-32 pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight text-foreground" style={{ letterSpacing: '-0.02em' }}>
                Get in touch
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Have a project in mind or need technical assistance? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <Card className="border-border bg-card shadow-sm">
                  <CardContent className="p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium text-foreground block mb-1">
                            Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className="w-full bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary min-h-[44px] px-4"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium text-foreground block mb-1">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email : example@gmail.com"
                            required
                            className="w-full bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary min-h-[44px] px-4"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium text-foreground block mb-1">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What's this about?"
                          className="w-full bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary min-h-[44px] px-4"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium text-foreground block mb-1">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project or question..."
                          rows={6}
                          required
                          className="w-full bg-background border-border text-foreground placeholder:text-muted-foreground resize-none focus-visible:ring-primary min-h-[44px] px-4 py-3"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            Send message
                            <Send className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-foreground">Contact information</h2>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <Card key={index} className="border-border bg-card hover:border-primary/50 transition-colors duration-200 shadow-sm">
                        <CardContent className="p-4 md:p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                              <info.icon className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs md:text-sm font-medium text-muted-foreground mb-1">
                                {info.label}
                              </p>
                              {info.href ? (
                                <a
                                  href={info.href}
                                  className="text-xs md:text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 break-words"
                                >
                                  {info.value}
                                </a>
                              ) : (
                                <p className="text-sm md:text-base font-medium text-foreground break-words">{info.value}</p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Card className="border-border bg-card shadow-sm">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-foreground">Availability</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                      I'm currently available for freelance projects and consulting work. Typical response time is within 24 hours.
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-foreground animate-pulse-glow"></div>
                      <span className="text-xs md:text-sm font-medium text-foreground">Available for new projects</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;