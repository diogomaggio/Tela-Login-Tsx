import { Input } from '@chakra-ui/react';
import { ChangeEventHandler } from 'react';

interface  PrimaryInputProps{
    name: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    label: string
    placeholder: string
    width : string
}

export default function inputs({name, value, onChange, label, placeholder, width}: PrimaryInputProps){
    return(

        <div className='input-container'>
            <label className='label'>{label}</label>
            <Input
                variant = 'filled'
                name = {name}
                value={value}
                onChange = {onChange}
                placeholder={placeholder}
                w={width}
                color= 'white'
                _focus={{
                    borderColor: 'purple.500',
                    boxShadow: 'white',
                  }}
            />

        </div>
    )
}