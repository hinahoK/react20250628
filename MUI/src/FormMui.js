import {Button, FormControl, FormControlLabel, FormHelperText,
    FormLabel, Radio, RadioGroup, TextField} from '@mui/material';
import {useForm} from 'react-hook-form';

export default function FormMui(){
    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            <div>
                <TextField label="名前" margin='normal'
                    {...register('name', {
                        required: '名前は必須入力です。',
                        maxLenght: {
                            value: 20,
                            message: '名前は２０文字以上にしてください。'
                        }
                    })}
                    error={'name' in errors}
                    helperText={errors.name?.message}/>
            </div>
            <div>
                <FormControl>
                    <FormLabel component="legend">性別：</FormLabel>
                    <RadioGroup name='gender'>
                        <FormControlLabel value="male" control={<Radio/>} label="男性"
                            {...register('gender', {
                                required: '性別は必須です。',
                            })}
                        />
                        <FormControlLabel value="female" control={<Radio/>} label="女性"
                            {...register('gender', {
                                required: '性別は必須です。',
                            })}
                        />
                    </RadioGroup>
                    <FormHelperText error={'gender' in errors}>
                        {errors.gender?.message}
                    </FormHelperText>
                </FormControl>
            </div>
        </form>
    );
}