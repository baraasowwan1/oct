import { useLanguage } from '../context/LanguageContext';
import { Palette, Sparkles, Car, ShieldCheck } from 'lucide-react';
import { CarConfigurator } from '../components/CarConfigurator';
import { motion } from 'motion/react';

export function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: t('service1Title'),
      description: t('service1Desc'),
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: t('service2Title'),
      description: t('service2Desc'),
    },
    {
      icon: <Car className="w-10 h-10" />,
      title: t('service3Title'),
      description: t('service3Desc'),
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-red-500 selection:text-white">

      {/* HERO SECTION */}
      <section className="relative w-full bg-black pt-28 md:pt-36 lg:pt-40 overflow-hidden">

        {/* خلفية خفيفة */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/20 blur-[140px] rounded-full pointer-events-none" />

        {/* النص */}
        <div className="relative z-10 container mx-auto px-4 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-white
              to-gray-400
              leading-tight
              max-w-5xl
              mx-auto
            "
          >
            {t('welcomeTitle')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              text-gray-300
              text-base
              sm:text-lg
              md:text-xl
              mt-5
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            {t('welcomeSubtitle')}
          </motion.p>
        </div>

        {/* السيارة */}
        <div className="relative z-10 mt-10 md:mt-16 w-full">
          <CarConfigurator />
        </div>

      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 container mx-auto px-4 relative">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-red-600/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            text-3xl
            md:text-5xl
            text-center
            mb-14
            font-bold
            tracking-tight
          "
        >
          {t('ourServices')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                p-8
                rounded-3xl
                hover:bg-white/10
                transition-all
                duration-300
                group
              "
            >
              <div className="
                w-16
                h-16
                rounded-full
                bg-gradient-to-br
                from-red-500
                to-red-700
                flex
                items-center
                justify-center
                mb-6
                group-hover:scale-110
                transition-transform
                duration-300
                shadow-lg
                shadow-red-500/30
              ">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 z-0" />

        <div className="container mx-auto px-4 text-center relative z-10">

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="
              max-w-5xl
              mx-auto
              bg-gradient-to-r
              from-red-900/40
              to-black
              border
              border-red-500/30
              p-8
              md:p-12
              rounded-[2rem]
              md:rounded-[3rem]
              shadow-2xl
            "
          >

            <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
              Ready to Transform Your Ride?
            </h2>

            <div className="flex flex-col md:flex-row gap-5 justify-center mb-10">

              <div className="flex items-center gap-3 bg-black/50 px-6 py-4 rounded-2xl border border-white/5">
                <ShieldCheck className="text-red-500 w-6 h-6" />
                <span className="font-medium text-lg">
                  {t('qualityGuarantee')}
                </span>
              </div>

              <div className="flex items-center gap-3 bg-black/50 px-6 py-4 rounded-2xl border border-white/5">
                <Sparkles className="text-red-500 w-6 h-6" />
                <span className="font-medium text-lg">
                  {t('uniqueDesigns')}
                </span>
              </div>

            </div>

            <a
              href="tel:0799010111"
              className="
                inline-block
                bg-white
                text-black
                px-8
                py-4
                rounded-full
                font-bold
                text-lg
                hover:bg-gray-200
                hover:scale-105
                transition-all
                shadow-[0_0_40px_rgba(255,255,255,0.3)]
              "
            >
              اتصل بنا الآن
            </a>

          </motion.div>

        </div>
      </section>

    </div>
  );
}
```
