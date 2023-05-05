import Link from "next/link";
import { useState } from 'react';
import {
    TextInput,
    createStyles,
    rem,
    Group,
    Anchor,
    Button
} from '@mantine/core';
import { useAuth } from "@/utils/auth";

const useStyles = createStyles((theme, { floating }: { floating: boolean }) => ({
    root: {
        position: 'relative',
    },

    label: {
        position: 'absolute',
        zIndex: 2,
        top: rem(12),
        left: theme.spacing.sm,
        pointerEvents: 'none',
        color: floating
            ? theme.colorScheme === 'dark'
                ? theme.white
                : theme.black
            : theme.colorScheme === 'dark'
                ? theme.colors.dark[3]
                : theme.colors.gray[5],
        transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
        transform: floating ? `translate(-${theme.spacing.sm}, ${rem(-40)})` : 'none',
        fontSize: floating ? theme.fontSizes.lg : theme.fontSizes.lg,
        fontWeight: floating ? 500 : 400,
    },

    required: {
        transition: 'opacity 150ms ease',
        opacity: floating ? 1 : 0,
    },

    input: {
        '&::placeholder': {
            transition: 'color 150ms ease',
            color: !floating ? 'transparent' : undefined,
        },
    },
}));

export default function Login() {
    const [focused, setFocused] = useState(false);
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const { classes } = useStyles({ floating: (user.trim().length !== 0 || pass.trim().length !== 0) || focused });
    const {login} = useAuth() as any;

    const submit = () => {
        login(
            user,
            pass
        )
    }


    return (
        <div className="flex flex-row h-screen bg-background overflow-hidden">
            <div className="flex flex-col md:w-4/12 w-full bg-white rounded-l-3xl shadow-2xl md:p-20 p-10">
                <img src="/assets/innopsi.png"  alt="innopsi_logo" className="h-20 object-contain" />
                <h1 className="text-4xl pt-24 pb-2 font-bold w-full text-blue-950">Sign In</h1>
                <div className="pb-10 text-md font-light">new to innopsi? <Link href='/register' className="text-blue-800 underline">Sign Up</Link> now!</div>
                <div className="flex flex-col gap-2">
                    <div className="mt-8 mb-2">
                        <TextInput
                            label="UserName / OrganisationName"
                            classNames={classes}
                            value={user}
                            onChange={(event) => setUser(event.currentTarget.value)}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            size='lg'
                            autoComplete="nope"
                        />
                    </div>
                    <div>
                        <Group position='right'>
                            <Anchor<'a'>
                                href="#"
                                onClick={(event) => event.preventDefault()}
                                sx={(theme) => ({
                                    paddingTop: 2,
                                    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
                                    fontWeight: 500,
                                    textAlign: 'right',
                                    fontSize: theme.fontSizes.xs,
                                })}
                            >
                                Forgot your password?
                            </Anchor>
                        </Group>
                        <TextInput
                            label="Password"
                            classNames={classes}
                            value={pass}
                            onChange={(event) => setPass(event.currentTarget.value)}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            size='lg'
                            autoComplete="nope"
                            type='password'
                        />
                    </div>
                    <div className="mt-5 flex justify-center items-center">
                        <Button onClick={submit} className="bg-blue-500 hover:bg-blue-600">
                            Sign In
                        </Button>
                    </div>
                    <div className="flex flex-col gap-2 mt-5">
                        <span className="flex items-center justify-center">
                            <span className="h-px bg-gray-400 w-14"></span>
                            <span className="font-normal text-gray-500 mx-2">or login with</span>
                            <span className="h-px bg-gray-400 w-14"></span>
                        </span>
                        <div className="flex flex-row justify-center items-center gap-">
                            <a
                                href="#"
                                className="flex items-center justify-center px-4 py-2
                                transition-colors duration-300 border border-gray-800 rounded-full group
                                hover:bg-gray-800 focus:outline-none"
                            >
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         width="20" height="20"
                                         viewBox="0 0 48 48">
                                        <path fill="#fbc02d"
                                              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path
                                        fill="#e53935"
                                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z">
                                        </path>
                                        <path
                                            fill="#4caf50"
                                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z">
                                        </path>
                                        <path
                                            fill="#1565c0"
                                            d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                                        </path>
                                    </svg>
                                </span>
                                <span
                                    className="text-sm font-medium text-gray-800 group-hover:text-white">
                                    Google
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-8/12 hidden md:block text-white p-20">
                <img src="/assets/g20c20.png" alt="c20_logo" className="h-20 w-full object-contain place-items-center" />
            </div>
        </div>
    )
}