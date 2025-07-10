// LeetCode #543

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0
    function depth(node: TreeNode | null): number {
        if (node == null) return null;

        const left = depth(node.left)
        const right = depth(node.right)
        diameter = Math.max(diameter, left + right)
        return 1 + Math.max(left, right)
    }
    depth(root);
    return diameter;
};