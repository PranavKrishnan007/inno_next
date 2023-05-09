import { IStrapiServerData } from "@/utils/Interfaces/coreEntity";
import { Badge } from "@mantine/core";



export const TagDisplayer = (props: { tags: any }) => {

    const color = ['orange', 'red', 'green']
    console.log(props.tags)
    return (
        <div className='flex flex-wrap gap-2 mt-2 md:ml-4'>
            { props.tags &&  props.tags.data?.map((tag:IStrapiServerData, index:number) => (
                <Badge color={color[Math.floor(Math.random() * color.length)]} key={index} variant='light' >
                        {tag.attributes.title}
                </Badge>
            ))}
        </div>
    )

}
