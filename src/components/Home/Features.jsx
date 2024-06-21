import React from 'react'

const Features = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 p-6">
            <header className="flex items-center mb-8">
                <div className="flex-shrink-0">
                    <img src="https://placehold.co/40x40" alt="Logo" className="h-10 w-10" />
                </div>
                <div className="ml-4">
                    <h1 className="text-xl font-bold">BePro.</h1>
                    <p className="text-sm">Business Special Template</p>
                </div>
            </header>
            <main>
                <section className="mb-12 lg:w-[30%]">
                    <h2 className="text-4xl font-bold mb-4">services.</h2>
                    <p className="text-lg mb-4">Intrinsically optimize orthogonal core competencies before <span className="text-blue-500">integrated platforms.</span></p>
                    <hr className="border-zinc-300 dark:border-zinc-700 w-12 mb-8" />
                </section>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <img src="https://placehold.co/80x80" alt="Business Research" className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-4" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Business Research</h3>
                        <p className="text-sm">Quickly leverage other's distributed internal or "organic" sources rather than empowered materials.</p>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <img src="https://placehold.co/80x80" alt="Marketing Analysis" className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-4" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Marketing Analysis</h3>
                        <p className="text-sm">Quickly leverage other's distributed internal or "organic" sources rather than empowered materials.</p>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <img src="https://placehold.co/80x80" alt="Consulting Services" className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-4" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Consulting Services</h3>
                        <p className="text-sm">Quickly leverage other's distributed internal or "organic" sources rather than empowered materials.</p>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <img src="https://placehold.co/80x80" alt="Design Development" className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-4" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Design Development</h3>
                        <p className="text-sm">Quickly leverage other's distributed internal or "organic" sources rather than empowered materials.</p>
                    </div>
                </section>
            </main>
            <footer className="mt-12 text-center text-sm">
                <p>www.websitename.com</p>
            </footer>
        </div>
  )
}

export default Features
