"use client"
import { motion } from 'framer-motion'
import { Section } from './Section'

export function CTA() {
  return (
    <Section id="cta">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-10 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold md:text-3xl"
        >
          Pronto para começar?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto mt-2 max-w-xl text-zinc-300"
        >
          Implemente sua landing page com performance, design e animações profissionais.
        </motion.p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#" className="rounded-md bg-white px-5 py-3 text-black">Começar agora</a>
          <a href="#features" className="rounded-md border border-zinc-700 px-5 py-3">Ver recursos</a>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_100%,rgba(120,119,198,0.15)_0%,transparent_60%)]" />
      </div>
    </Section>
  )
}

