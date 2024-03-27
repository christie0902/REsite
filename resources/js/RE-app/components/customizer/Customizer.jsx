import React, { useState, useEffect, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { downloadCanvasToImage, reader } from "../../lib/config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../../lib/config/constants";
import { fadeAnimation, slideAnimation } from "../../lib/config/motion";
import { ColorPicker, FilePicker, CustomButton, Tab, Preset } from "..";
import Context from "../../store/Context";
import ImgSlider from "./ImgSlider";
import EditImage from "./EditImage";
import axios from "axios";

const Customizer = () => {
    const { state, dispatch } = useContext(Context);
    const [file, setFile] = useState("");
    const [prompt, setPrompt] = useState("");
    const [generatingImg, setGeneratingImg] = useState(false);
    const [activeEditorTab, setActiveEditorTab] = useState("");
    const [activeFilterTab, setActiveFilterTab] = useState({
        logoShirt: true,
        stylishShirt: false,
    });

    //show tab content depends on active tabs
    const generateTabContent = () => {
        switch (activeEditorTab) {
            case "colorpicker":
                return <ColorPicker />;

            case "filepicker":
                return (
                    <FilePicker
                        file={file}
                        setFile={setFile}
                        readFile={readFile}
                    />
                );

            // case "aipicker":
            //   return <AIPicker
            //     prompt = {prompt}
            //     setPrompt={setPrompt}
            //     generatingImg={generatingImg}
            //     handleSubmit ={handleSubmit}
            //   />

            case "preset":
                return (
                    <Preset
                        file={file}
                        handleFile={handleFile}
                        setFile={setFile}
                    />
                );

            case "edit":
                return (
                   <EditImage/>
                )

            default:
                return null;
        }

           
    };
    const handleFile = (type, filePath) => {
        {
            handleDecals(type, filePath);
            setActiveEditorTab("");
        }
    };

    // const handleSubmit = async (type) => {
    //   if(!prompt) return alert("Please enter a prompt!");

    //   try {
    //       //call backend to generate an AI image
    //       setGeneratingImg(true);

    //       const response = await fetch('http://localhost:5000/api/v1/dalle', {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type' : 'application/json'
    //       },
    //        body: JSON.stringify({
    //         prompt,
    //        })
    //   })

    //       const imgURL = await response.json()

    //       handleDecals(type, imgURL)

    //   } catch (error) {
    //       alert(error)
    //   } finally {
    //       setGeneratingImg(false);
    //       setActiveEditorTab("")
    //   }
    // }

    const handleDecals = (type, result) => {
        const decalType = DecalTypes[type];

        dispatch({
            type: "customizer/set-KeyVal",
            payload: {
                key: decalType.stateProperty,
                val: result,
            },
        });

        if (!activeFilterTab[decalType.filterTab]) {
            handleActiveFilterTab(decalType.filterTab);
        }
    };

    const handleActiveFilterTab = (tabName) => {
        switch (tabName) {
            case "logoShirt":
                dispatch({
                    type: "customizer/set-isLogo",
                    payload: !activeFilterTab[tabName],
                });
                break;
            case "stylishShirt":
                dispatch({
                    type: "customizer/set-isFull",
                    payload: !activeFilterTab[tabName],
                });
                break;
            default:
                dispatch({ type: "customizer/set-defaultTextures" });
        }

        //after setting state, activeFilterTab is updated

        setActiveFilterTab((prevState) => {
            return {
                ...prevState,
                [tabName]: !prevState[tabName],
            };
        });
    };

    const readFile = (type) => {
        reader(file).then((result) => {
            handleDecals(type, result);
            setActiveEditorTab("");
        });
    };

    async function uploadImage(dataUrl) {
        try {
          const response = await axios.post('/api/upload-image', { image: dataUrl });
          return response.data.url;
        } catch (error) {
          console.error('Upload failed:', error);
          return null;
        }
      }
    return (
        <AnimatePresence>
            {!state.customizerState.intro && (
                <>
                    <motion.div
                        key="custom"
                        className="absolute top-0 left-0 z-10"
                        {...slideAnimation("left")}
                    >
                        <div className="flex items-center min-h-screen">
                            <div className="editortabs-container tabs">
                                {EditorTabs.map((tab) => (
                                    <Tab
                                        key={tab.name}
                                        tab={tab}
                                        handleClick={() => {
                                            if (activeEditorTab == tab.name) {
                                                setActiveEditorTab("");
                                            } else {
                                                setActiveEditorTab(tab.name);
                                            }
                                        }}
                                    />
                                ))}

                                {generateTabContent()}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute z-10 top-5 right-5"
                        {...fadeAnimation}
                    >
                        <CustomButton
                            type="filled"
                            title="Go Back"
                            handleClick={() =>
                                dispatch({
                                    type: "customizer/set-intro",
                                    payload: true,
                                })
                            }
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>

                    <motion.div
                        className="filtertabs-container"
                        {...slideAnimation("up")}
                    >
                        {FilterTabs.map((tab) => (
                            <Tab
                                key={tab.name}
                                tab={tab}
                                isFilterTab
                                isActiveTab={activeFilterTab[tab.name]}
                                handleClick={() => {
                                    if (tab.name === "download") {
                                        downloadCanvasToImage();
                                    } else if (tab.name === "order") {
                                        const canvas =
                                            document.querySelector("canvas");
                                        const canvasURL = canvas.toDataURL();
                                        uploadImage(canvasURL);
                                        dispatch({
                                            type: "product/cart-add",
                                            payload: {
                                                id: "CT" + Math.random().toFixed(4).toString(),
                                                name: "Customize Tshirt",
                                                image_url: canvasURL,
                                                price: "50",
                                                sizes: ['S', 'M', 'L', 'XL'],
                                                selectedSize: "S",
                                                quantity: 1,
                                                isCustom: true
                                            },
                                        });
                                    } else {
                                        handleActiveFilterTab(tab.name);
                                    }
                                }}
                            />
                        ))}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Customizer;
