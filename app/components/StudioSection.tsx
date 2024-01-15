import {BiographyState} from "@/app/models";

import MediaText from "@/app/components/MediaText";

export interface StudioProps {
    data: BiographyState;
}

export default function StudioSection({ data: studioSection }: StudioProps) {
    return (
        <section className='studio-content container-fluid py-12 md:py-20'>
            <div className="flex">
                <div className="basis-full">
                    <h2 className="text-center mb-12">{studioSection.title}</h2>
                </div>
            </div>
            {
                studioSection.mediaText.map((el, index) => {
                    return (
                        index === 0
                            ? <MediaText key={el.id} data={el} addClass='slide-left' scroll={500} />
                            : index === 1
                                ? <MediaText key={el.id} data={el} addClass='slide-right' scroll={-500} />
                                : <MediaText key={el.id} data={el} addClass='slide-left-bis' scroll={500} />
                    )
                })
            }
        </section>
    )
}