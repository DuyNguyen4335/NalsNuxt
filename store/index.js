import axiosInstance from "../plugins/axios";
import OFFSET from '../constant';
import axios from "axios";
export const state = () => ({
    listPost : [],
    page : 1,
    totalPage : 0
})

export const mutations = {
    SET_LIST_POST(state, data) {
        state.listPost = data;
    },
    SET_TOTAL_PAGE(state, totalPage){
        state.totalPage = totalPage;
    },
    SET_CURRENT_PAGE(state, currentPage){
        state.page = currentPage;
    }
}

export const actions = {
    async actGetListPost({state, commit, dispatch}, page=null, keySearch = null){
        try {
            if(page){
                var config = {
                    params : {
                        page,
                        offset : OFFSET
                    }
                }
                commit('SET_CURRENT_PAGE', parseInt(page));
                var result = await axiosInstance.get("blogs", config);
            }else{
                var config = {
                    params : {
                        page : state.page,
                        offset : OFFSET
                    }
                }
                var result = await axiosInstance.get("blogs", config);
            }
            if(result.status === 200){
                // console.log(result.data.pagination.count);
                var totalItem = result.data.pagination.count;
                dispatch('actGetTotalPage', totalItem);
                commit('SET_LIST_POST', result.data.data.items);
            }
        } catch (error) {
            console.log(error);
        }
    },
    actGetTotalPage({commit}, data){
        var offset = OFFSET;
        if(data){
            if(data % offset !== 0){
                var totalPage = Math.floor(data / offset) + 1;
                commit('SET_TOTAL_PAGE', totalPage);
            }else{
                var totalPage = data / offset;
                commit('SET_TOTAL_PAGE', totalPage);
            }
        }
    },
    async actGetPostDetailById(postId){
        try {
            console.log(postId);
            var result = await axiosInstance.get("blogs/" + postId);
            console.log(result);
        }catch(error) {
            console.log(error);
        }
    }
}

export const getters = {
    getListPost: state => state.listPost,
    page : state => state.page,
    totalPage : state => state.totalPage
}