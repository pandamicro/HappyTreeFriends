cc.Class({
    extends: cc.Component,
    properties: {
        radius: 0,
        color: cc.Color
    },

    initGoal (pos) {
        this.node.width = this.radius;
        this.node.height = this.radius;
        this.node.color = this.color;
        this.node.position = pos;
    },

    checkHit (otherPos) {
        var dx = otherPos.x - this.node.x;
        var dy = otherPos.y - this.node.y;
        return dx * dx + dy * dy < Math.pow(this.radius, 2) * 2;
    }
});