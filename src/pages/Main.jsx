import React, { useState } from 'react';
import { ChakraProvider, Heading, Text, Box, Button, Input, FormControl, Checkbox, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import { theme } from '../components/element/CustomButton';
import { FaSmile } from 'react-icons/fa';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

// Extend dayjs with the isBetween plugin
dayjs.extend(isBetween);

const Main = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [taskTime, setTaskTime] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [filter, setFilter] = useState('all');

    // Add task with timing
    const addTask = () => {
        if (taskInput.trim() && taskTime) {
            setTasks([
                ...tasks,
                { id: tasks.length + 1, label: taskInput, time: taskTime, status: 'active' }
            ]);
            setTaskInput('');
            setTaskTime('');
            onClose(); 
        }
    };

    // Mark task as completed
    const markTaskComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, status: 'completed' } : task
        ));
    };

    // Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Filter tasks
    const now = dayjs();
    const activeTasks = tasks.filter(task =>
        task.status === 'active' &&
        dayjs(task.time).isBetween(now.subtract(20, 'minute'), now)
    );
    const completedTasks = tasks.filter(task => task.status === 'completed');
    const displayedTasks = filter === 'all' ? tasks : filter === 'active' ? activeTasks : completedTasks;

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
                            value={taskInput}
                            onChange={(e) => setTaskInput(e.target.value)}
                        />
                        <Button
                            size="lg"
                            variant="solid"
                            flex="1"
                            minW="100%"
                            onClick={onOpen}
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
                    <Button size="lg" variant="solid" colorScheme={filter === 'all' ? 'teal' : 'gray'} flex="1" minW="120px" onClick={() => setFilter('all')}>
                        All
                    </Button>
                    <Button size="lg" variant="solid" colorScheme={filter === 'active' ? 'yellow' : 'gray'} flex="1" minW="120px" onClick={() => setFilter('active')}>
                        Active
                    </Button>
                    <Button size="lg" variant="solid" colorScheme={filter === 'completed' ? 'green' : 'gray'} flex="1" minW="120px" onClick={() => setFilter('completed')}>
                        Completed
                    </Button>
                </Box>

                {/* Conditional Heading */}
                {tasks.length === 0 ? (
                    <Box textAlign="center">
                        <Heading mb={4}>
                            Let's get started! <FaSmile style={{ display: 'inline', marginLeft: '8px' }} />
                        </Heading>
                        <Text>Add a new task to begin</Text>
                    </Box>
                ) : (
                    <Box textAlign="left">
                        <Heading mb={4}>{tasks.length} {tasks.length > 1 ? 'Tasks' : 'Task'} Remaining</Heading>

                        {/* Task List */}
                        <Box>
                            {displayedTasks.map((task) => (
                                <Box key={task.id} mb={4}>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" gap={4}>
                                        <Checkbox isChecked={task.status === 'completed'}>
                                            <Text>{task.label}</Text>
                                        </Checkbox>
                                        <Box display="flex" gap={2}>
                                            {task.status === 'active' ? (
                                                <>
                                                    <Button
                                                        size="md"
                                                        variant="outline"
                                                        borderColor="white"
                                                        color="white"
                                                        flex="1"
                                                        minW="40px"
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        size="md"
                                                        variant="solid"
                                                        colorScheme="red"
                                                        flex="1"
                                                        minW="40px"
                                                        onClick={() => deleteTask(task.id)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </>
                                            ) : (
                                                <Button
                                                    size="md"
                                                    variant="solid"
                                                    colorScheme="green"
                                                    flex="1"
                                                    minW="40px"
                                                    onClick={() => markTaskComplete(task.id)}
                                                >
                                                    Mark Complete
                                                </Button>
                                            )}
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}

                {/* Modal for Task Timing */}
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent bg="black" color="white">
                        <ModalHeader>Add Task Time</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl>
                                <Input
                                    type="datetime-local"
                                    value={taskTime}
                                    onChange={(e) => setTaskTime(e.target.value)}
                                />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="teal" onClick={addTask}>
                                Add Task
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </ChakraProvider>
    );
};

export default Main;
