import React from 'react';
import { ChakraProvider, Heading, Text, Box, Button, Input, FormControl, Checkbox } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { theme } from '../components/element/CustomButton';

const tasks = [
    { id: 1, label: 'Task 1' },
    { id: 2, label: 'Task 2' },
    { id: 3, label: 'Task 3' },
    { id: 4, label: 'Task 4' },
    { id: 5, label: 'Task 5' },
];

const Main = () => {
    return (
        <ChakraProvider theme={theme}>
            <Box maxW={{ base: "100%", md: "xl" }} mx="auto" textAlign="center" px={4}>
                <Heading as="h1" size={{ base: "lg", md: "xl" }} mt={10} mb={4}>
                    TodoMatic
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }} mb={4}>
                    What needs to be done?
                </Text>
                <Box mb={4}>
                    <FormControl>
                        <Input
                            mb={4}
                            type="text"
                            placeholder="Enter your task..."
                            size={{ base: 'md', md: 'lg' }}
                            width="100%"
                        />
                        <Button
                            size="lg"
                            variant="solid"
                            flex="1"
                            minW="100%"
                            width={{ base: "100%", md: "auto" }}
                        >
                            Add
                        </Button>
                    </FormControl>
                </Box>

                {/* Filter Buttons */}
                <Box
                    maxW="md"
                    mx="auto"
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent="center"
                    gap={4}
                    mb={8}
                >
                    <Link to="">
                        <Button size="lg" variant="solid" colorScheme="red" flex="1" minW="120px">
                            All
                        </Button>
                    </Link>
                    <Link to="">
                        <Button size="lg" variant="solid" colorScheme="yellow" flex="1" minW="120px">
                            Active
                        </Button>
                    </Link>
                    <Link to="">
                        <Button size="lg" variant="solid" colorScheme="green" flex="1" minW="120px">
                            Completed
                        </Button>
                    </Link>
                </Box>

                {/* Task List */}
                <Box textAlign="left">
                    <Heading mb={4}>5 Tasks Remaining</Heading>
                    <Box>
                        {tasks.map((task) => (
                            <Box key={task.id} mb={4}>
                                <Box display="flex" justifyContent="space-between" alignItems="center" gap={4}>
                                    <Checkbox>
                                        <Text>{task.label}</Text>
                                    </Checkbox>
                                    <Box display="flex" gap={2}>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            flex="1"
                                            minW="40px"
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="solid"
                                            colorScheme="red"
                                            flex="1"
                                            minW="40px"
                                        >
                                            Delete
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </ChakraProvider>
    );
};

export default Main;
