"use client"
import { motion } from 'framer-motion'
import { Section } from './Section'

const features = [
  {
    title: 'Velocidade',
    text: 'Carregamento rápido com Next.js e otimizações de imagem.',
  },
  {
    title: 'Animações',
    text: 'Interações suaves com Framer Motion e microinterações.',
  },
  {
    title: 'SEO',
    text: 'Metadados aprimorados e performance para ranquear melhor.',
  },
]

export function Features() {
  return (
    <Section id="features" title="Recursos" subtitle="O que você recebe ao escolher esta solução.">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-6"
          >
            <h3 className="text-lg font-medium">{f.title}</h3>
            <p className="mt-2 text-zinc-300">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

