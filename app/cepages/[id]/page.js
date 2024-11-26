import { getGrapeById } from '@lib/notion';
import { groupSections } from '@utils/notionUtils';
import BackButton from '@components/BackButton';
import AccordionSection from '@app/components/AccordionSection.js';
import ListAside from '@components/ListAside';

import Image from 'next/image';
import Link from 'next/link.js';

// icônes
import rougeIcon from '@icons/grape_red.png';
import blancIcon from '@icons/grape_white.png';


export default async function GrapePage({ params }) {
    const { id } = await params;
    const grapeData = await getGrapeById(id);
    const sections = groupSections(grapeData.blocks);

    if (!grapeData) {
        return <div>Cépage non trouvé</div>;
    }

    return (
        <>
            <header className="flex flex-col items-center my-10">
                <Image
                    src={grapeData.type.toLowerCase() === 'rouge' ? rougeIcon : blancIcon}
                    alt={grapeData.type.toLowerCase() === 'rouge' ? "Rouge" : "Blanc"}
                    width={72}
                    height={72}
                />
                <h1 className="text-h1 font-bold text-center text-primary ">
                    {grapeData.name}
                </h1>
            </header>
            {sections.map((section, index) => (
                <AccordionSection key={index} section={section} />
            ))}
            <BackButton /> {/* Redirige vers la page des pays */}
            <section className='custom_css_section mt-10'>
                <ListAside
                    title="Pays avec ce cépage"
                    data={grapeData.countries}
                    isCountryData={true} // On indique que ce sont des pays (ce qui va afficher des flags)
                />
            </section>
        </>
    );
}