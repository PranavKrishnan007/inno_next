import { ITags } from "@/utils/Interfaces";
import { addTag, getAllTags } from "@/utils/Services/tag_service";
import { MultiSelect, SelectItem } from "@mantine/core"
import { useEffect, useState } from "react";

export interface ITagSelector {
    id: string;
    onChange: (e:string[]) => void;
    createable : boolean;
}

export const TagSelector = (props : ITagSelector) => {
   const [tags, setTags] = useState<SelectItem[]>([
    {
        value: '404',
        label: 'Error'
    }
   ]);


    useEffect( ()=> {
        getAllTags().then((res) => {
            let formattedTags: SelectItem[] = [];
            res.forEach(tag => {
                console.log(tag)
                formattedTags.push({
                    label: tag.title + '',
                    value : tag.id + '',
            })
            })
            setTags(formattedTags);
        })
    }, [])

const createTag = (name: string) => {
    addTag(name).then((res) => {
        setTags([...tags, {
            label: name,
            value: res.id + '',
        }])
        return name;
    })
    return name;
}

    return (
        <MultiSelect
        data={tags}
        placeholder="Select a tag"
        transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }}
        searchable
        creatable={props.createable}
        getCreateLabel={(query) => `+ Create "${query}"`}
        onCreate={createTag}
        className='focus:border-primary focus:border-2'
        nothingFound='No tags found'
        onChange={props.onChange}
        id={props.id}
        />
    )
}
