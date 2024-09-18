import React, { useState } from 'react';
import { ChakraProvider, Heading, Text, Box, Button, Input, FormControl, Checkbox, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, useToast } from '@chakra-ui/react';
import { theme } from '../components/element/CustomButton';
import { FaSmile } from 'react-icons/fa';

const Main = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [modalTask, setModalTask] = useState(null);
    const [filter, setFilter] = useState('all');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const addTask = () => {
        if (taskInput.trim()) {
            setTasks([...tasks, { id: tasks.length + 1, label: taskInput, status: 'pending' }]);
            setTaskInput('');
            toast({
                title: "Task added.",
                description: "You've successfully added a new task.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
        toast({
            title: "Task deleted.",
            description: "The task has been removed.",
            status: "warning",
            duration: 5000,
            isClosable: true,
        });
    };

    const handleStatusChange = (id, status) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, status } : task));
    };

    const filteredTasks = tasks.filter(task => filter === 'all' || task.status === filter);

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
                            onClick={addTask}
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
                    <Button size="lg" variant="solid" colorScheme="red" flex="1" minW="120px" onClick={() => setFilter('all')}>
                        All
                    </Button>
                    <Button size="lg" variant="solid" colorScheme="yellow" flex="1" minW="120px" onClick={() => setFilter('active')}>
                        Active
                    </Button>
                    <Button size="lg" variant="solid" colorScheme="green" flex="1" minW="120px" onClick={() => setFilter('completed')}>
                        Completed
                    </Button>
                </Box>

                {/* Conditional Heading */}
                {tasks.length === 0 ? (
                    <Box textAlign="center">
                        <Heading mb={4}>
                            Let's get started! <FaSmile style={{ display: 'inline', marginLeft: '8px' }} />
                        </Heading>
                    </Box>
                ) : (
                    <Box textAlign="left">
                        <Heading mb={4}>{filteredTasks.length} {filteredTasks.length > 1 ? 'Tasks' : 'Task'} Remaining</Heading>

                        {/* Task List */}
                        <Box>
                            {filteredTasks.map((task) => (
                                <Box key={task.id} mb={4}>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" gap={4}>
                                        <Checkbox isChecked={task.status === 'completed'} onChange={() => handleStatusChange(task.id, task.status === 'completed' ? 'active' : 'completed')}>
                                            <Text>{task.label}</Text>
                                        </Checkbox>
                                        <Box display="flex" gap={2}>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                flex="1"
                                                minW="40px"
                                                onClick={() => {
                                                    setModalTask(task);
                                                    onOpen();
                                                }}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="solid"
                                                colorScheme="red"
                                                flex="1"
                                                minW="40px"
                                                onClick={() => deleteTask(task.id)}
                                            >
                                                Delete
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}
            </Box>

            {/* Modal for Editing Tasks */}
            {modalTask && (
                <Modal isOpen={isOpen} onClose={() => { onClose(); setModalTask(null); }}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Edit Task</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Edit your task..."
                                    value={modalTask.label}
                                    onChange={(e) => setModalTask({ ...modalTask, label: e.target.value })}
                                />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" onClick={() => {
                                setTasks(tasks.map(task => task.id === modalTask.id ? modalTask : task));
                                onClose();
                                setModalTask(null);
                                toast({
                                    title: "Task updated.",
                                    description: "The task has been updated successfully.",
                                    status: "info",
                                    duration: 5000,
                                    isClosable: true,
                                });
                            }}>
                                Save
                            </Button>
                            <Button colorScheme="gray" onClick={() => {
                                onClose();
                                setModalTask(null);
                            }} ml={3}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </ChakraProvider>
    );
};

export default Main;
