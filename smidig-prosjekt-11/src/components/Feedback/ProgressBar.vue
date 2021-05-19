<template>
    <div id="progress-bar-border-top">
        <div id="progress-bar">
            <div id="progress-bar-container">
                <!-- Green line -->
                <div id="progress-bar-border">
                    <!-- Setting class if isSuccessfulReport and/or isUnsuccessfulReport is true -->
                    <div
                        id="progress-bar-width"
                        :class="{
                            'progress-bar-successful-line': isSuccessfulReport,
                            'progress-bar-unsuccessful-line': isUnsuccessfulReport
                        }"
                    ></div>
                </div>

                <!-- Images -->
                <div class="progress-bar-done progress-bar-icons" id="progress-bar-home">
                    <img src="@/assets/Images/Icons/home-icon.png" alt="Progress bar, Home button" />
                </div>

                <div class="progress-bar-done progress-bar-icons" id="progress-bar-edit-report">
                    <img src="@/assets/Images/Icons/edit-report-icon.png" alt="Progress bar, Edit report" />
                </div>

                <!-- Setting class if isSuccessfulReport and/or isUnsuccessfulReport is true -->
                <div
                    :class="{
                        'progress-bar-done': isSuccessfulReport,
                        'progress-bar-not-done': isUnsuccessfulReport
                    }"
                    class="progress-bar-icons"
                    id="progress-bar-success"
                >
                    <img
                        src="@/assets/Images/Icons/report-success-white-icon.png"
                        alt="Progress bar, Report sent"
                    />
                </div>
            </div>

            <!-- Button to go back to previous page -->
            <router-link :to="'/' + prevBtn">
                <img
                    class="progress-bar-buttons"
                    id="back-btn"
                    src="@/assets/Images/Icons/forward-back-icon.png"
                    alt="Go to previous page"
                />
            </router-link>

            <!-- Button to go to next page -->
            <!-- Setting class if isSuccessfulReport is true -->
            <router-link :to="'/' + nextBtn" :class="{ 'next-btn-none': isSuccessfulReport }">
                <button id="forward-btn">
                    <span class="font-standardText"
                        >Submit <span style="font-size: 1.1em;">{{ updateTotalProducts }}</span> Repairs</span
                    >
                    <img src="@/assets/Images/Icons/enter.png" alt="Go to next page" id="submit-icon" />
                </button>
            </router-link>
            <!-- Using a getter from store to display the amount of products rendered -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Progress bar',
    data() {
        return {
            isSuccessfulReport: false,
            isUnsuccessfulReport: true,
            prevBtn: 'repair',
            nextBtn: 'entry-successful'
        };
    },
    // Updating the amount of products rendered
    computed: {
        updateTotalProducts() {
            return this.$store.getters.getNumOfEntities;
        }
    },

    // Implementing Lifecycle hooks to change classes
    // depending on url
    created: function() {
        let url = window.location.href;

        if (url.indexOf('entry-successful') > -1) {
            this.isSuccessfulReport = true;
            this.isUnsuccessfulReport = false;
            this.prevBtn = 'repair';
        } else {
            this.isSuccessfulReport = false;
            this.isUnsuccessfulReport = true;
            this.prevBtn = '#';
        }
    }
};
</script>

<style lang="scss" scoped>
#progress-bar-border-top {
    position: absolute;
    bottom: 0;
    height: 70px;
    width: 100%;
    border-top: 1px solid black;
    background-color: #f8f6f2;

    #progress-bar {
        position: relative;
        margin: auto;
        width: 60%;

        #progress-bar-container {
            position: relative;
            padding-top: 2rem;
            width: 50%;
            margin: auto;

            #progress-bar-border {
                overflow: hidden;
                height: 0.25rem;
                margin-bottom: 1rem;
                background-color: #848484;
                display: flex;

                #progress-bar-width {
                    background-color: #7eb46b;
                }
            }
        }

        .progress-bar-icons {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 14px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 60%;
                margin: auto;
            }
        }

        #progress-bar-edit-report {
            left: 46%;
        }

        #progress-bar-success {
            left: 95%;
        }

        // Classes to change from done and not done steps
        // in the repair process
        .progress-bar-done {
            background-color: #7eb46b;
        }

        .progress-bar-not-done {
            background-color: #848484;
        }

        // Buttons to go back and forward
        .progress-bar-buttons {
            position: absolute;
            width: 45px;
        }

        #back-btn {
            left: 15px;
            top: 15px;
        }
        #submit-icon {
            padding-right: 10px;
            padding-top: 1px;
            height: 27px;
            width: 34px;
            transform: scaleX(-1);
        }

        #forward-btn {
            font-weight: bold;
            padding: 0.5rem;
            border-radius: 5px;
            display: inline-flex;
            right: -120px;
            top: 10px;
            position: absolute;
            background-color: white;
            border: 2px solid gray;
            outline: none;

            &:hover {
                background-color: #405c6a;
                color: white;
                transform: scale(1.05);
                transition-duration: 73ms;
            }
        }
    }
}

.progress-bar-unsuccessful-line {
    width: 50%;
}

.progress-bar-successful-line {
    width: 100%;
}

.next-btn-none {
    display: none;
}

#total-products {
    position: absolute;
    right: -150px;
    bottom: -10px;
}

@media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
    #progress-bar-border-top {
        height: 60px;

        #progress-bar {
            #progress-bar-container {
                padding-top: 1.75rem;
            }

            .progress-bar-icons {
                width: 30px;
                height: 30px;
            }

            .progress-bar-buttons {
                width: 30px;
            }

            #forward-btn {
                font-size: 11px;
                height: 30px;
                top: 13px;
                right: -90px;
                padding: 0.4em;

                #submit-icon {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
}
</style>
