<template>
    <div id="popup-container">
        <!-- PRODUCT-DIV -->
        <div class="product-container">
            <div class="product-section">
                <h1>Product</h1>
                <div id="popup-static-product-style">
                    <img src="@/assets/Images/Parts/sunbellProductImage.png" alt="Product: Sunbell" />
                    <h2>Sunbell</h2>
                </div>
            </div>

            <div class="serial-section">
                <h1>Serial number</h1>

                <input
                    ref="inputSerialNumber"
                    v-on:keydown="serialInputIsEmpty = false"
                    v-bind:class="{ serialInputEmpty: serialInputIsEmpty }"
                    type="text"
                    :v-model="serialNr"
                    placeholder="Example: 1234 5678"
                />
            </div>
        </div>
        <modal-error-message v-if="showModal == true" @close="showModal = false">
            <template v-slot:body>{{ modalTextBody }}</template>
            <!-- Serial Number Already Exists -->
        </modal-error-message>
        <!-- PARTS-DIV -->
        <div class="part-container">
            <h1>Parts</h1>
            <div id="parts-cont-no-change" class="part-grid">
                <div
                    class="part-grid-entity"
                    v-for="product in productImages"
                    :key="product.partNumber"
                    @click="selectPart(product)"
                >
                    <img
                        class="part-icon"
                        :class="{ partchecked: product.isChecked }"
                        :id="product.partNumber"
                        :src="require('@/assets/Images/Parts/' + product.imgName + '.png')"
                    />
                    <h2>{{ product.partName }}</h2>
                </div>
            </div>
            <icon-base
                class="close-repair-ic"
                iconName="cross"
                iconColor="darkred"
                v-on:click="closeFunction"
            />
        </div>

        <icon-base class="submit-ic" iconName="arrow-right" iconColor="darkgreen" @click="submitPartsSelected" />
    </div>
</template>

<script>
import ModalErrorMessage from '@/components/Modals/ModalErrorMessage.vue';
import IconBase from '../UI/IconBase.vue';

export default {
    name: 'PopupSelect',
    props: {
        pictures: Array,
        closeFunction: {
            Type: Function
        }
    },
    emits: ['clicked'],
    components: {
        ModalErrorMessage,
        IconBase
    },
    data() {
        return {
            serialInputIsEmpty: false,
            modalTextBody: '',
            showModal: false,
            serialNr: {
                Type: Number,
                Required: true
            },

            productImages: [
                {
                    partNumber: '1',
                    partName: 'Lamp',
                    imgName: 'ic-part-lamp',
                    isChecked: false
                },
                {
                    partNumber: '2',
                    partName: '12V charger',
                    imgName: 'ic-part-adapter-charger',
                    isChecked: false
                },
                {
                    partNumber: '3',
                    partName: 'Battery',
                    imgName: 'ic-part-battery',
                    isChecked: false
                },
                {
                    partNumber: '4',
                    partName: 'Power button',
                    imgName: 'ic-part-button',
                    isChecked: false
                },
                {
                    partNumber: '5',
                    partName: 'Light bulb',
                    imgName: 'ic-part-lightbulb',
                    isChecked: false
                },
                {
                    partNumber: '6',
                    partName: 'Screen',
                    imgName: 'ic-part-screen',
                    isChecked: false
                },
                {
                    partNumber: '7',
                    partName: 'Socket charger',
                    imgName: 'ic-part-socket-charger',
                    isChecked: false
                },
                {
                    partNumber: '8',
                    partName: 'Solar panel',
                    imgName: 'ic-part-solar-panel',
                    isChecked: false
                }
            ],
            partsChosen: []
        };
    },
    methods: {
        selectPart(product) {
            product.isChecked = !product.isChecked; // Flips the boolean value, true->false, false->true
        },
        submitPartsSelected() {
            // Adding the marked parts to the partsChosen-array
            for (let i = 0; i < this.productImages.length; i++) {
                if (this.productImages[i].isChecked) {
                    this.partsChosen.push(this.productImages[i]);
                }
            }

            const serialNr = this.$refs.inputSerialNumber.value;
            if (serialNr == '') {
                // No serial number provided
                this.partsChosen = [];
                this.serialInputIsEmpty = true;
                this.modalTextBody = 'Please Input Serial Number';
                this.showModal = true;
                return;
            } else if (serialNr.length > 20) {
                // Serial number too long
                this.modalTextBody = 'Serial number length must be less than 20';
                this.showModal = true;
                return;
            } else if (isNaN(serialNr)) {
                // Serial number must be numeric
                this.modalTextBody = 'Serial number can only contain numbers';
                this.showModal = true;
                return;
            } else if (this.partsChosen.length == 0) {
                // Please choose part
                this.modalTextBody = 'Please Select Parts';
                this.showModal = true;
                return;
            }

            const stateEntities = this.$store.getters.getEntities;

            // Get first available unique id
            let newId = 0;
            const takenIds = [];
            for (let i = 0; i < stateEntities.length; i++) {
                takenIds[stateEntities[i].id] = true;
            }
            for (let i = 0; i <= stateEntities.length; i++) {
                if (!takenIds[i]) {
                    newId = i;
                    break;
                }
            }

            //Creates object which later is injected into Vue state
            const newEntity = {
                id: newId,
                entitySerialNr: serialNr,
                parts: this.partsChosen
            };

            const exists = stateEntities.findIndex(
                entity => entity.entitySerialNr === newEntity.entitySerialNr
            );
            // Check for serialnumber
            // Validation for serialnumber should prob be added
            if (exists == -1) {
                this.serialInputIsEmpty = true;
                this.$store.commit('addEntity', newEntity);
                this.closePopup();
            } else {
                this.modalTextBody = 'Serial Number Already Exists';
                this.showModal = true;
                this.partsChosen = [];
            }
        },
        closePopup() {
            this.$emit('clicked');
        }
    }
};
</script>
<style lang="scss" scoped>
#popup-container {
    width: 100%;
    height: 100%;
    user-select: none;
    text-align: center;
    background-color: #f8f6f2;
    display: grid;
    grid-template-columns: auto 70%;

    h1 {
        font-size: 1.5em;
        // margin: 3vh;
        // padding-bottom: 2vh;
        font-weight: bold;
        margin: 0;
        color: #38293c;
    }

    .product-container {
        border-right: 1px solid black;
        // Creating grid for products-container to
        // position both product and serial number
        display: grid;
        height: 100%;
        grid-template-rows: 60% 40%;

        .product-section {
            border-bottom: 1px solid black;
        }

        #popup-static-product-style {
            background-color: #7eb46b;
            width: 15vh;
            height: 15vh;
            margin: auto;

            h2 {
                font-weight: bold;
                font-size: 17px;
            }

            img {
                -webkit-user-drag: none;
                cursor: default;
            }
        }

        .serial-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h1 {
                position: relative;
                color: #38293c;
            }

            .serialInputEmpty {
                box-shadow: 0px 0px 8px #cc0000;
            }

            input {
                border: 1.5px solid #423048;
                border-radius: 5px;
                background-color: #fffefd;
                color: #050505;
                text-align: center;
                font-weight: bold;
                font-style: italic;
            }
        }
    }

    .part-container {
        display: flex;
        flex-direction: column;

        align-items: center;
        background-color: #f8f6f2;
        padding: 10px;
        // border: 1px solid blue;

        .part-grid {
            // border: 1px solid red;
            height: 80%;
            width: 100%;
            margin: 10px 0 10px 0;
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            justify-items: center;

            grid-template-columns: repeat(4, minmax(0, 1fr));
            grid-template-rows: repeat(2, minmax(0, 1fr));
            gap: 0px 20px;
        }

        .part-grid-entity {
            // border: 1px solid black;
            display: flex;
            flex-direction: column;
            cursor: pointer;

            width: 90%;
            height: 90%;

            &:hover img {
                background: #7eb46b;
            }

            .part-icon {
                background-color: #e2e2e2;
                flex: 1;
                align-self: center;
                -webkit-user-drag: none;
            }

            h2 {
                cursor: pointer;
                font-weight: bold;
                font-size: 1rem;
            }
        }

        .part-grid-entity .partchecked {
            background-color: #7eb46b;
        }
    }

    .submit-ic {
        position: absolute;
        right: 10px;
        bottom: 10px;

        h3 {
            color: #fff;
        }
    }

    .close-repair-ic {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }
}

@media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
    #container {
        h1 {
            font-size: 1em;
        }
        img {
            margin-bottom: 5px;
        }

        #products-container {
            #popup-static-product-style {
                h2 {
                    font-size: 12px;
                }
            }
        }

        #parts {
            .parts-container {
                a {
                    width: 80px;

                    h2 {
                        font-size: 10px;
                    }
                }
            }
        }

        #next-btn {
            width: 65px;
            height: 30px;
            font-size: 12px;
        }
    }
}
</style>
