<template>
    <div id="product-container">
        <img class="product-img" src="@/assets/Images/Parts/sunbellProductImage.png" alt="sunbell" />
        <!-- <div class="product-img-container">
        </div> -->
        <div class="serial-container">
            <span class="serial-number">{{ this.entitySerialNumber }}</span>
        </div>

    <!-- Loops through the selected parts for this repair, and displays their images -->

        <div class="parts-container">
            <img
                v-for="part in entityParts"
                :key="part.partNumber"
                class="part-img"
                :src="require('@/assets/Images/Parts/' + part.imgName + '.png')"
                alt="{{part.partName}}"
            />
        </div>
        <!-- Div to hold both edit and repair -->
        <div class="edit-delete-icons">
            <button class="edit-delete-buttons" @click="editEntity(this.entity)">
                <!-- <img
                    class="edit-delete-img-width"
                    src="@/assets/Images/edit-icon.png"
                    alt="Edit entity button"
                /> -->
                <div class="edit-delete-ic-container">
                    <icon-base iconName="pencil" iconColor="darkblue" iconWidth="100%" iconHeight="100%" />
                </div>
            </button>

            <button class="edit-delete-buttons" @click="deleteEntity(this.entity)">
                <div class="edit-delete-ic-container">
                    <icon-base
                        id="delete-ic"
                        iconName="cross"
                        iconColor="darkred"
                        iconWidth="100%"
                        iconHeight="100%"
                    />
                </div>
            </button>
        </div>
    </div>
    <hr />
</template>

<script>
import IconBase from '../UI/IconBase.vue';
export default {
    data() {
        return {};
    },
    components: { IconBase },
    props: {
        entityParts: {
            Type: Object
        },
        entitySerialNumber: {
            Type: String
        }
    },
    methods: {
        editEntity: function() {
            this.$emit('edit-entity', this.entitySerialNumber);
        },
        deleteEntity: function() {
            this.$store.commit('deleteEntity', this.entitySerialNumber);
        }
    }
};
</script>

<style lang="scss">
#product-container {
    // width: 100%;
    height: 100px;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: space-between;

    .product-img {
        margin-left: 50px;
        height: 80%;
        // border: 1px solid black;
    }

    .serial-container {
        width: 250px;
        // border: 1px solid blue;

        .serial-number {
            font-size: 1.2rem;
            background-color: #dad2cb;
            border-radius: 8px;
            padding: 10px;
        }
    }

  input {
    border: 1.5px solid #423048;
    border-radius: 5px;
    background-color: #fffefd;
    color: #050505;
    text-align: center;
    font-weight: bold;
  }

    .parts-container {
        height: 100%;
        width: 40vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .part-img {
        height: 90%;
        border-radius: 10px;
        background-color: #dad2cb;
        margin-left: 8px;
    }

    .edit-delete-icons {
        // border: 1px solid black;
        margin-right: 50px;
        width: 100px;
        display: flex;
        justify-content: space-between;

        .edit-delete-ic-container {
            width: 23px;
            height: 23px;
        }
    }


    /*
  button {
    outline: none;
  }

  hr {
    grid-column: 1/-1;
    grid-row: 2;
    width: 93%;
    margin: auto;
    border-top: 0.5px solid #707070;
  }

     */
}

@media only screen and (min-device-width: 600px) and (max-width: 960px) {
    #product-container {
        height: 80px;
        // .product-image-sunbell {
        //     width: 45px;
        // }

        // #product-serial-number {
        //     font-size: 12px;
        //     width: 25vh;
        // }

        .edit-delete-icons {
            margin-right: 10px;
            width: 50px;

            .edit-delete-ic-container {
                width: 15px;
                height: 15px;
            }
        }
    }
}
</style>
