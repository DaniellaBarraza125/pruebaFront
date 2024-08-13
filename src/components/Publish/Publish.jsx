import React, { useState } from 'react';
import {Box,Button,Center,Checkbox,FormControl,FormLabel,Heading,Input,Select,Step,StepIcon,StepIndicator,StepNumber,StepSeparator,StepStatus,Stepper,Text,Textarea, useSteps,} from '@chakra-ui/react';

const autores = ['ale', 'dani', 'alex', 'nicky'];

const steps = [
    { 
        title: 'Step 1', 
        questions: [
            { question: 'Tipo de artículo', type: 'select', options: ['Artículo original', 'Artículo de revisión', 'Carta al editor', 'Caso clínico', 'Serie de casos clínicos', 'Editorial', 'Arte'] },
            { question: 'Título del artículo', type: 'text' },
            { question: 'Resumen', type: 'textArea' },
            { question: 'Palabras clave', type: 'multiInput', inputs: Array(6).fill(null) }
        ] 
    },
    { 
        title: 'Step 2', 
        questions: [
            { question: 'Coautores: ', type: 'select2', options: autores }
        ] 
    },
    { 
        title: 'Step 3', 
        questions: [
            { question: 'Conflicto de interés', type: 'checkbox' },
            { question: 'Explicación del conflicto de interés', type: 'textArea' }
        ] 
    },
    { 
        title: 'Step 6', 
        questions: [
            { question: 'Question 18', type: 'input' },
            { question: 'Question 19', type: 'input' }
        ] 
    },
];

const Publish = () => {
    const { activeStep, goToNext, goToPrevious } = useSteps({
        index: 0,
        count: steps.length
    });

    const initialState = steps.reduce((acc, step, stepIndex) => {
        step.questions.forEach((question, index) => {
            switch (question.type) {
                case 'select':
                case 'text':
                case 'textArea':
                case 'multiInput':
                case 'select2':
                case 'checkbox':
                    acc[`question${stepIndex}-${index}`] = '';
                    break;
                default:
                    break;
            }
        });
        return acc;
    }, {});

    const [answers, setAnswers] = useState(initialState);
    const [showTextarea, setShowTextarea] = useState(true); 
    const [selectedCoauthor, setSelectedCoauthor] = useState(''); 
    const [coauthorsList, setCoauthorsList] = useState([]); 

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (name === 'question2-0') {
            setShowTextarea(!checked); 
        }
    };

    const handleAddCoauthor = () => {
        if (selectedCoauthor && !coauthorsList.includes(selectedCoauthor)) {
            setCoauthorsList(prevList => [...prevList, selectedCoauthor]);
            setSelectedCoauthor(''); 
        }
    };

    const isStepComplete = () => {
        const step = steps[activeStep];
        if (!step) return false;

        switch (step.title) {
            case 'Step 1':
                return isStep1Complete();
            case 'Step 2':
                return true; 
            case 'Step 3':
                return isStep3Complete();
            case 'Step 6':
                return isStep6Complete();
            default:
                return false;
        }
    };

    const isStep1Complete = () => {
        const step = steps[0];
        return step.questions.every((question, index) => {
            switch (question.type) {
                case 'select':
                case 'text':
                case 'textArea':
                    return answers[`question0-${index}`]?.trim() !== '';
                case 'multiInput':
                    const filledInputs = Array.from({ length: 6 }, (_, i) => answers[`question0-input${i}`]).filter(Boolean);
                    return filledInputs.length >= 3;
                default:
                    return false;
            }
        });
    };

    const isStep2Complete = () => {
        return true;
    };

    const isStep3Complete = () => {
        const step = steps[2];
        if (!answers[`question2-0`]) {
            return answers[`question2-1`]?.trim() !== '';
        }
        return true;
    };

    const isStep6Complete = () => {
        const step = steps[3];
        return step.questions.every((question, index) => {
            return answers[`question3-${index}`]?.trim() !== '';
        });
    };

    const renderStep = (step) => {
        switch (step.title) {
            case 'Step 1':
                return (
                    <Box mt={4}>
                        <Center>
                            <Heading my='20px' fontSize='larger'>Datos generales del artículo </Heading>
                        </Center>
                        <FormControl isRequired display='flex' mt='20px'>
                            <FormLabel width={200}>Tipo de artículo</FormLabel>
                            <Select
                                name={`question0-0`}
                                value={answers[`question0-0`] || ''}
                                onChange={handleInputChange}
                            >
                                <option value="">Select an option</option>
                                {step.questions[0].options.map((option, i) => (
                                    <option key={i} value={option}>{option}</option>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl isRequired mt={4} display='flex'>
                            <FormLabel width={200}>Título del artículo</FormLabel>
                            <Input
                                name={`question0-1`}
                                value={answers[`question0-1`] || ''}
                                onChange={handleInputChange}
                            />
                        </FormControl>

                        <FormControl isRequired mt={4} display='flex'>
                            <FormLabel width={200}>Resumen</FormLabel>
                            <Textarea
                                name={`question0-2`}
                                value={answers[`question0-2`] || ''}
                                onChange={handleInputChange}
                            />
                        </FormControl>

                        <FormControl isRequired mt={4}>
                            <Box display={'flex'}>
                                <FormLabel width={130}>Palabras clave</FormLabel>
                                <Text>Es necesario añadir de 3 a 6 palabras clave</Text>
                            </Box>
                            <Box display="flex" marginLeft={140} width='70%' flexWrap="wrap" justifyContent="space-evenly">
                                {step.questions[3].inputs.map((_, inputIndex) => (
                                    <FormControl key={inputIndex} width="48%">
                                        <Input
                                            name={`question0-input${inputIndex}`}
                                            value={answers[`question0-input${inputIndex}`] || ''}
                                            onChange={handleInputChange}
                                        />
                                    </FormControl>
                                ))}
                            </Box>
                        </FormControl>
                    </Box>
                );
            case 'Step 2':
                return (
                    <Box mt={4}>
                        <Heading fontSize={'larger'}>Coautores</Heading>
                        <Text>Autor/a principal:</Text>
                        <Text>Coautores añadidos:</Text>
                        <FormControl mt={4} isRequired>
                            <FormLabel>Seleccionar coautor</FormLabel>
                            <Select
                                value={selectedCoauthor}
                                onChange={(e) => setSelectedCoauthor(e.target.value)}
                            >
                                <option value="">Seleccione un autor</option>
                                {step.questions[0].options.map((option, i) => (
                                    <option key={i} value={option}>{option}</option>
                                ))}
                            </Select>
                            <Button mt={2} onClick={handleAddCoauthor} colorScheme='green'>Añadir</Button>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Coautores añadidos</FormLabel>
                            <Box>
                                {coauthorsList.length === 0 ? (
                                    <Text>No se han añadido coautores.</Text>
                                ) : (
                                    <ul>
                                        {coauthorsList.map((coauthor, index) => (
                                            <li key={index}>{coauthor}</li>
                                        ))}
                                    </ul>
                                )}
                            </Box>
                        </FormControl>
                    </Box>
                );
            case 'Step 3':
                return (
                    <Box mt={4}>
                        <Heading>Conflicto de Interés</Heading>
                        <FormControl isRequired display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Checkbox
                                name={`question2-0`}
                                value={answers[`question2-0`] || ''}
                                onChange={handleInputChange}
                            />
                            <FormLabel m={2}>Declaro que no tengo ningún conflicto de interés</FormLabel>
                        </FormControl>

                        {showTextarea && (
                            <FormControl isRequired mt={4}>
                                <Textarea
                                    name={`question2-1`}
                                    placeholder='En caso de tener algún conflicto de interés, por favor, explique cuál'
                                    value={answers[`question2-1`] || ''}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        )}
                    </Box>
                );
            case 'Step 6':
                return (
                    <Box mt={4}>
                        <FormControl isRequired>
                            <FormLabel>Question 18</FormLabel>
                            <Input
                                name={`question3-0`}
                                value={answers[`question3-0`] || ''}
                                onChange={handleInputChange}
                            />
                        </FormControl>

                        <FormControl isRequired mt={4}>
                            <FormLabel>Question 19</FormLabel>
                            <Input
                                name={`question3-1`}
                                value={answers[`question3-1`] || ''}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                    </Box>
                );
            default:
                return null;
        }
    };

    const currentStep = steps[activeStep] || { title: '' };

    return (
        <Box>
            <Center>
                <Box padding="20px" margin='10%' width={'75vw'} maxW='550px' border='1px solid' borderColor={'lightgray'} borderRadius={15}>
                    <Stepper colorScheme='green' index={activeStep}>
                        {steps.map((step, index) => (
                            <Step key={index}>
                                <StepIndicator my={5}>
                                    <StepStatus
                                        complete={<StepIcon />}
                                        incomplete={<StepNumber />}
                                        active={<StepNumber />}
                                    />
                                </StepIndicator>
                                <StepSeparator />
                            </Step>
                        ))}
                    </Stepper>

                    {renderStep(currentStep)}

                    <Box mt={4} display="flex" justifyContent="space-between">
                        <Button
                            onClick={goToPrevious}
                            isDisabled={activeStep === 0}
                        >
                            Anterior
                        </Button>
                        {activeStep === steps.length - 1 ? (
                            <Button onClick={() => console.log('Formulario completo:', answers)} isDisabled={!isStepComplete()}>
                                Enviar
                            </Button>
                        ) : (
                            <Button
                                onClick={goToNext}
                                isDisabled={!isStepComplete()}
                            >
                                Siguiente
                            </Button>
                        )}
                    </Box>
                </Box>
            </Center>
        </Box>
    );
};

export default Publish;
