import React from "react";
import { extendTheme, Button as ChakraButton } from '@chakra-ui/react';

import clsx from 'clsx'; 


export const theme = extendTheme({
    components: {
        Button: {
            baseStyle: {
                borderRadius: 'md',
                px: 4,
                py: 2,
                fontWeight: 'bold',
                _focus: {
                    boxShadow: 'outline',
                },
            },
            sizes: {
                sm: {
                    fontSize: 'sm',
                    px: 3,
                    py: 1.5,
                },
                md: {
                    fontSize: 'md',
                    px: 4,
                    py: 2,
                },
                lg: {
                    fontSize: 'lg',
                    px: 6,
                    py: 3,
                },
            },
            variants: {
                yel: {
                    bg: 'yellow.700',
                    color: 'white',
                    _hover: {
                        bg: 'yellow.900',
                    },
                },
                outline: {
                    border: '2px solid',
                    borderColor: 'purple.500',
                    color: 'purple.500',
                    _hover: {
                        bg: 'purple.50',
                    },
                },
                whi: {
                    bg: 'white',
                    color: 'yellow.500',
                    _hover: {
                        bg: 'yellow.50',
                    },
                },
            },
        },
    },
});

export const CustomButton = ({ children, className, size, variant, ...rest }) => {
    return (
        <ChakraButton
            size={size}
            variant={variant}
            className={clsx(className)}
            {...rest}
        >
            {children}
        </ChakraButton>
    );
};

