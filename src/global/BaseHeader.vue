<template>
    <header fluid v-if="sIsLogin === false && $vuetify.breakpoint.xs === false">
        <div class="header_body">
            <div class="logo" @click="$router.push('/')"><h2>RMS</h2></div>
            <div class="menu">
                <v-btn text><router-link class="menu_item" to="/">Fuel Cell</router-link></v-btn>
                <v-btn text><router-link class="menu_item" to="/chart">Chart</router-link></v-btn>
                <!-- <v-btn text><router-link class="menu_item" to="/intro">Intro</router-link></v-btn> -->
                <v-btn text><router-link class="menu_item" to="/report">Report</router-link></v-btn>
            </div>
            <div class="avatar">
                <v-menu bottom min-width="100px" rounded offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn icon x-large v-on="on">
                            <v-avatar color="brown" size="38">
                                <span class="white--text text-h5">{{ user.initials }}</span>
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-list-item-content class="justify-center">
                            <div class="mx-auto text-center">
                                <v-avatar color="brown">
                                    <span class="white--text text-h5">{{ user.initials }}</span>
                                </v-avatar>
                                <h3>{{ user.fullName }}</h3>
                                <p class="text-caption mt-1">
                                    {{ user.email }}
                                </p>
                                <v-divider class="my-3"></v-divider>
                                <v-btn text @click="$router.push('/adminsetting/user')">
                                    Edit Account
                                </v-btn>
                                <v-divider class="my-3"></v-divider>
                                <v-btn text @click="$router.push('/adminsetting/users')">
                                    Admin Setting
                                </v-btn>
                                <v-divider class="my-3"></v-divider>
                                <ChangePassword />
                            </div>
                        </v-list-item-content>
                    </v-card>
                </v-menu>
            </div>
        </div>
    </header>
</template>
<script>
import ChangePassword from './ChangePasswordDialog';
export default {
    name: 'app-header',
    components: {
        ChangePassword
    },
    methods: {},
    computed: {
        sIsLogin() {
            return window.location.href.includes('login');
        }
    },
    data: () => ({
        user: {
            initials: 'AD',
            fullName: 'Master',
            email: 'john.doe@doe.com'
        }
    })
};
</script>
<style lang="scss" scoped>
header {
    height: 50px;
    background-color: white;
    max-height: 50px;
    position: sticky;
    top: 0;
    z-index: 9;

    .header_body {
        max-width: $MAX_WIDTH;
        margin: 0 auto;
        width: 100%;
        height: 50px;
        display: grid;
        grid-template-columns: 1fr 8fr 1fr;
        align-items: center;
        padding: 0 10px;

        .logo {
            cursor: pointer;
        }

        .menu {
            display: flex;
            justify-content: space-between;
            padding: 0 20vw;

            &_item {
                text-decoration: none;
                color: black;
            }
        }

        .avatar {
            display: flex;
            justify-content: flex-end;
        }
    }
}

//📱 view port 가 600px 이하로 작을 때
@media (max-width: 600px) {
    header {
        .header_body {
            .logo {
            }

            .menu {
                padding: 0 10vw;

                &_item {
                }
            }

            .avatar {
            }
        }
    }
}

//💻 view port 가 1200px 이하로 작을 때
@media (max-width: $MAX_WIDTH) {
}

// 🖥 view port 가 1200px 이상 클 때
@media (min-width: $MAX_WIDTH) {
    header {
        .header_body {
            .logo {
            }

            .menu {
                padding: 0 400px;

                &_item {
                }
            }

            .avatar {
            }
        }
    }
}
</style>
