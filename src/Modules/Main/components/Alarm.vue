<template lang="">
    <div class="modal" @click="cancel()">
        <v-dialog v-model="dialog" scrollable max-width="350px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn rounded color="warning" dark v-bind="attrs" v-on="on">
                    alarm
                </v-btn>
                <!-- <v-btn rounded color="warning" dark v-bind="attrs" v-on="on">
                    alarm
                </v-btn> -->
            </template>
            <v-card class="pa-4">
                <header class="d-flex justify-space-between">
                    <h3>Alarm List</h3>
                    <v-btn icon v-if="sIsAlarmOn === true" @click="sIsAlarmOn = false"><v-icon class="" color="primary">mdi-alarm-multiple</v-icon></v-btn>
                    <v-btn icon v-else @click="sIsAlarmOn = true"><v-icon class="">mdi-alarm-off</v-icon></v-btn>
                </header>

                <v-divider></v-divider>
                {{ selected }}
                <v-card-text>
                    <div class="alarm_item">
                        <p class="black--text"><v-checkbox v-model="sSelectAll" @change="handleAllSelect()" value="all"></v-checkbox></p>
                        <p class="black--text">Type</p>
                        <p class="black--text">Name</p>
                        <p class="black--text">Time</p>
                        <p class="black--text">Value</p>
                    </div>
                    <div class="alarm_item">
                        <p class="black--text"><v-checkbox v-model="selected" value="2"></v-checkbox></p>
                        <p>error</p>
                        <p>TemperC</p>
                        <p>07.14 15:03:23</p>
                        <p>23</p>
                    </div>
                    <div class="alarm_item">
                        <p class="black--text"><v-checkbox v-model="selected" value="3"></v-checkbox></p>
                        <p>error</p>
                        <p>TemperC</p>
                        <p>07.14 15:03:23</p>
                        <p>23</p>
                    </div>
                    <div class="alarm_item">
                        <p class="black--text"><v-checkbox v-model="selected" value="4"></v-checkbox></p>
                        <p>error</p>
                        <p>TemperC</p>
                        <p>07.14 15:03:23</p>
                        <p>23</p>
                    </div>
                    <div class="alarm_item">
                        <p class="black--text"><v-checkbox v-model="selected" value="5"></v-checkbox></p>
                        <p>error</p>
                        <p>TemperC</p>
                        <p>07.14 15:03:23</p>
                        <p>23</p>
                    </div>
                    <div class="alarm_item">
                        <p class="black--text"><v-checkbox v-model="selected" value="6"></v-checkbox></p>
                        <p>error</p>
                        <p>TemperC</p>
                        <p>07.14 15:03:23</p>
                        <p>23</p>
                    </div>
                </v-card-text>
                <div class="text-center px-3 pagenation">
                    <v-pagination class="pagenation_box" v-model="page" :length="15" :total-visible="7" @input="handlePageEvent()"></v-pagination>
                </div>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                        Close
                    </v-btn>
                    <!-- <v-btn color="blue darken-1" text @click="dialog = false">
                        Save
                    </v-btn> -->
                    <v-btn color="blue darken-1" text @click="handleClear()">
                        Clear
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="handleClearAll()">
                        All Clear
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'Alarm',
    data() {
        return {
            page: 1,
            dialogm1: '',
            dialog: false,
            modal: this.$modal.sModalData,
            selected: [],
            sSelectAll: [],
            sAllAlarmIdList: ['2', '3', '4', '5', '6'],
            sIsAlarmOn: true
        };
    },
    destroyed() {
        this.sSelectAll = [];
    },
    methods: {
        handleAllSelect() {
            if (this.sSelectAll[0] !== 'all') {
                this.selected = [];
            } else {
                this.sAllAlarmIdList.forEach(id => {
                    this.selected.push(id);
                });
            }
        },
        handleClearAll() {
            this.$confirm.show({
                question: 'All alarm clear?',
                done: () => {
                    console.log('All alarm clear');
                }
            });
        },
        handleClear() {
            this.$confirm.show({
                question: 'selected alarm clear?',
                done: () => {
                    console.log('clear');
                }
            });
        },
        handlePageEvent() {
            console.log(this.page);
        },
        cancel() {
            this.$emit('eModalCancel');
        }
    }
};
</script>

<style lang="scss" scoped>
.v-dialog {
    overflow: hidden;
    .v-card {
        .v-card__text {
            padding: 0;
            overflow: hidden !important;
        }
    }
}

p {
    margin: 0;
}

.alarm_item {
    display: grid;
    grid-template-columns: 1fr 1.5fr 3fr 3.8fr 1.6fr;
    align-items: center;
    width: 100%;
    height: 40px;
    border-bottom: $BORDER_BOTTOM;
}

::v-deep .v-pagination__item {
    min-width: 20px !important;
    height: 20px !important;
}

::v-deep .v-pagination__navigation {
    min-width: 10px !important;
    height: 20px !important;
}
</style>
