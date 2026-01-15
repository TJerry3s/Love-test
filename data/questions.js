// 恋爱倾向测试题目（20道）
export const questions = [
  { id: 1, text: "我很容易对刚认识的人产生心动的感觉", dimension: "激情型" },
  { id: 2, text: "在开始一段感情前，我会仔细考虑对方的经济条件和发展前景", dimension: "理智型" },
  { id: 3, text: "我愿意为了对方放弃自己的兴趣爱好", dimension: "奉献型" },
  { id: 4, text: "独处时会感到孤独，希望有人陪伴", dimension: "依赖型" },
  { id: 5, text: "即使很爱对方，我也需要保留自己的私人空间", dimension: "独立型" },
  { id: 6, text: "浪漫的约会和惊喜对我非常重要", dimension: "激情型" },
  { id: 7, text: "我认为门当户对是婚姻的重要基础", dimension: "理智型" },
  { id: 8, text: "只要对方开心，我愿意做任何牺牲", dimension: "奉献型" },
  { id: 9, text: "分开几天就会让我非常想念对方", dimension: "依赖型" },
  { id: 10, text: "我不希望对方24小时联系我，需要一些自由时间", dimension: "独立型" },
  { id: 11, text: "外在吸引力是我选择伴侣的重要标准", dimension: "激情型" },
  { id: 12, text: "我会认真评估对方是否适合结婚生子", dimension: "理智型" },
  { id: 13, text: "我常常把对方的需求放在自己之前", dimension: "奉献型" },
  { id: 14, text: "情感低谷时，我迫切需要恋人的安慰和支持", dimension: "依赖型" },
  { id: 15, text: "我认为健康的感情应该是两个独立个体的结合", dimension: "独立型" },
  { id: 16, text: "热恋期的感觉消退后，我会怀疑这段感情", dimension: "激情型" },
  { id: 17, text: "我会为恋爱关系制定清晰的未来规划", dimension: "理智型" },
  { id: 18, text: "我很少计较自己在感情中的付出和回报", dimension: "奉献型" },
  { id: 19, text: "一个人生活时，我会感到空虚不安", dimension: "依赖型" },
  { id: 20, text: "我不会因为恋爱而疏远自己的朋友和家人", dimension: "独立型" }
];

// 恋爱倾向维度题目索引
export const dimensionIndices = {
  激情型: [1, 6, 11, 16],
  理智型: [2, 7, 12, 17],
  奉献型: [3, 8, 13, 18],
  依赖型: [4, 9, 14, 19],
  独立型: [5, 10, 15, 20]
};

// 答案选项
export const answerOptions = [
  { value: 1, label: "完全不符合", description: "完全不认同题目的描述" },
  { value: 2, label: "比较不符合", description: "基本不认同题目的描述" },
  { value: 3, label: "一般", description: "对题目的描述持中立态度" },
  { value: 4, label: "比较符合", description: "基本认同题目的描述" },
  { value: 5, label: "完全符合", description: "完全认同题目的描述" }
];
