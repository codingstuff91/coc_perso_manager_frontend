<template>
    <div class="character">
        <div class="character-header">
            <img src="../assets/man.png" width="50">
            <h1>James BOND</h1>
        </div>
        <div class="character-footer">
            <button>Consulter</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
.character{
    background-color: #4c4bc4;
    padding : 10px;
    border-radius: 20px;
    box-shadow: 5px 5px 15px 5px #ABABAB;

}
.character-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width : 85%;
    margin: 0 auto;
}

.character img{
    border: 2px solid #e9ecf1;
    border-radius: 50px;
    padding: 10px;
}

.character-header h1{
    font-size: 20px;
    font-weight: bold;
    color: #ffff;
}
.character-footer button{
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    background-color: #ffff;
    width : 95%;
    font-size: 16px;
    font-weight: bold;
}
</style>