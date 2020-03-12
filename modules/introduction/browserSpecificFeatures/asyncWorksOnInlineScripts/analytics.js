export let counter = {};

counter.time = 0;

counter.count = function()
{
    return this.time++;
}