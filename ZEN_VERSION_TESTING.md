# Zen Version Performance Testing

## 概述

這個 workflow 可以在統一的 GitHub Actions 環境中測試所有 Zen 版本，確保公平對比。

## 特點

✅ **統一環境**: 所有測試在相同的 GitHub runner 上執行
✅ **多次迭代**: 每個版本運行 3 次（可調整），計算平均值和標準差
✅ **順序執行**: `max-parallel: 1` 確保沒有資源競爭
✅ **自動報告**: 自動生成 Markdown 對比報告
✅ **靈活配置**: 可測試全部版本或指定版本

## 使用方法

### 1. 測試所有版本（57 個版本）

在 GitHub 倉庫頁面：
1. 點擊 **Actions** 標籤
2. 選擇 **Zen Version Comparison** workflow
3. 點擊 **Run workflow**
4. 保持 `versions` 為空
5. 設置 `iterations`（建議 3-5 次）
6. 點擊 **Run workflow**

⏱️ **預計時間**: ~3-4 小時（57 版本 × 3 迭代 × ~2 分鐘）

### 2. 測試特定版本（快速對比）

輸入要測試的版本（逗號分隔）：
```
3.1.1,3.11.0,3.47.0,3.48.0
```

⏱️ **預計時間**: ~25 分鐘（4 版本 × 3 迭代 × ~2 分鐘）

### 3. 命令行觸發

```bash
# 測試所有版本
gh workflow run "Zen Version Comparison"

# 測試特定版本
gh workflow run "Zen Version Comparison" \
  -f versions="3.1.1,3.11.0,3.47.0" \
  -f iterations="5"
```

## 結果報告

### 自動生成

- **VERSION_COMPARISON.md**: 完整對比報告
- **Artifacts**: 每個版本的原始 JSON 結果

### 報告內容

1. **關鍵測試排名**:
   - Single Read
   - Single Write
   - Batch Write (10x)
   - Computed Value Access
   - Deep Chain (10 layers)
   - Very Deep Chain (100 layers)
   - Wide Fanout (1→100)
   - Massive Fanout (1→1000)

2. **最佳版本總結**: 每個測試的最快版本

3. **統計數據**:
   - 平均 ops/sec
   - 標準差
   - 與最快版本的百分比

## 測試策略

### 初步篩選（推薦）

先測試關鍵版本找出候選：
```
3.1.0, 3.1.1, 3.5.0, 3.10.0, 3.11.0, 3.15.0, 3.20.0, 3.30.0, 3.40.0, 3.46.0, 3.47.0, 3.48.0
```

### 細化測試

找到最佳範圍後，測試該範圍內所有版本：
```
# 例如如果 3.10.0-3.15.0 表現最好
3.10.0, 3.11.0, 3.12.0, 3.13.0, 3.13.1, 3.14.0, 3.15.0, 3.15.1
```

### 完整測試

最後對所有 57 個版本做完整測試確認。

## 注意事項

### 穩定性考慮

- **多次迭代**: 至少 3 次，推薦 5 次
- **順序執行**: 避免並行導致的性能波動
- **固定環境**: Ubuntu latest, Node 20, Bun 1.3.2

### 可能的問題

1. **Bun 下載失敗**: Workflow 使用固定 Bun 版本避免此問題
2. **超時**: 單個版本測試限時 15 分鐘
3. **版本不存在**: Workflow 會驗證版本並報錯

## 範例結果

```markdown
### Single Read

| Rank | Version | Ops/sec | Std Dev | vs Best |
|------|---------|---------|---------|----------|
| 1 | 3.11.0 | 17.92M | ±120K | 100.0% |
| 2 | 3.1.1 | 16.35M | ±95K | 91.2% |
| 3 | 3.10.0 | 15.80M | ±110K | 88.2% |
```

## 下一步

基於測試結果：
1. 識別最佳版本
2. 分析該版本的代碼變更
3. 將優化應用到新版本
4. 創建 v3.49.0 = 最佳版本的代碼

## 觸發測試

現在就開始測試！推薦先測試關鍵版本：

```bash
gh workflow run "Zen Version Comparison" \
  -f versions="3.1.1,3.11.0,3.47.0,3.48.0" \
  -f iterations="5"
```
