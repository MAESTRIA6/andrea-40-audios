"use client"
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="px-6 text-center"
      >
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold md:text-6xl">
          Um título forte e direto
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
          Subtítulo com proposta de valor clara.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a className="rounded-md bg-white px-5 py-3 text-black" href="#cta">Começar</a>
          <a className="rounded-md border border-zinc-700 px-5 py-3" href="#sobre">Saiba mais</a>
        </div>
      </motion.div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,119,198,0.25)_0%,transparent_60%)]" />
    </section>
  )
}

