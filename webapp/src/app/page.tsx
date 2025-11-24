import LosCabosScene from "@/components/LosCabosScene";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#05061d] via-[#0a1d3a] to-[#04243a] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,222,186,0.18),rgba(4,10,27,0.05))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,252,230,0.12),rgba(7,23,47,0.05))]" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center gap-16 px-6 pb-24 pt-24 sm:px-10 lg:flex-row lg:items-start lg:gap-24 lg:pt-32">
        <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 rounded-full border border-white/20 bg-white/10 px-5 py-1 text-sm uppercase tracking-[0.32em] text-white/80 backdrop-blur">
            Sueño Pacífico
          </span>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Luna llena sobre el Arco de Los Cabos
          </h1>
          <p className="mt-6 text-lg text-slate-200/80 sm:text-xl">
            Una pieza ilustrada que captura la majestuosidad del icónico Arco
            de Cabo San Lucas bajo un cielo profundo y estrellado. El océano,
            la roca iluminada y la luna brillante te invitan a sumergirte en una
            noche de colores vibrantes.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#ilustracion"
              className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-white"
            >
              Ver ilustración
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/90 text-xs text-white transition group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#detalles"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white/80 backdrop-blur transition hover:border-white hover:text-white"
            >
              Inspiración
            </a>
          </div>
        </div>
        <div id="ilustracion" className="flex w-full justify-center lg:pt-6">
          <LosCabosScene />
        </div>
      </main>
      <section
        id="detalles"
        className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-24 sm:px-10 lg:flex-row"
      >
        <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">
            Notas cromáticas
          </h2>
          <p className="mt-4 text-base text-white/80">
            El cielo mezcla magentas suaves y violetas profundos para resaltar
            el contraste con la claridad dorada de la luna. El arco retiene los
            matices cálidos de la roca bañada por la luz nocturna, mientras que
            el océano recupera reflejos turquesa y destellos plateados.
          </p>
        </div>
        <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">
            Atmósfera y calma
          </h2>
          <p className="mt-4 text-base text-white/80">
            Las estrellas titilantes y la suave neblina luminosa alrededor del
            arco transmiten serenidad. Cada resplandor pertenece a una noche
            donde el Pacífico y el cielo se encuentran en armonía.
          </p>
        </div>
      </section>
    </div>
  );
}
