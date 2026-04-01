#!/bin/bash

echo "--- 🔍 Sky Consults Deployment Diagnostic ---"

# 1. Check for Case-Sensitivity Issues
echo -e "\n[1] Checking Component Casing..."
COMPONENTS=("SectionHeading" "AnimatedSection" "Card" 
"calculator/CostCalculator")
for COMP in "${COMPONENTS[@]}"; do
    FILE_PATH=$(find src -iname "$(basename $COMP).tsx" -o -iname "$(basename 
$COMP).ts")
    if [ -z "$FILE_PATH" ]; then
        echo "❌ NOT FOUND: $COMP (Check if you forgot to upload it)"
    else
        echo "✅ FOUND: $FILE_PATH"
        # Compare exact casing
        if [[ "$FILE_PATH" != *"$COMP"* ]]; then
            echo "   ⚠️ WARNING: Casing Mismatch! Code wants '$COMP' but 
file is '$FILE_PATH'"
        fi
    fi
done

# 2. Verify tsconfig.json Alias
echo -e "\n[2] Verifying @/ Path Alias..."
if [ -f "tsconfig.json" ]; then
    ALIAS=$(grep -c "\"@/\*\": \[\"./src/\*\"\]" tsconfig.json)
    if [ "$ALIAS" -eq "0" ]; then
        echo "❌ ALIAS ERROR: '@/' might not be pointing to './src/*' in 
tsconfig.json"
    else
        echo "✅ ALIAS OK: '@/' is correctly mapped to './src/*'"
    fi
else
    echo "❌ ERROR: tsconfig.json missing from root!"
fi

# 3. Check node_modules Symlink
echo -e "\n[3] Checking CloudLinux Symlink..."
if [ -L "node_modules" ]; then
    TARGET=$(readlink -f node_modules)
    echo "✅ node_modules is a valid symlink pointing to: $TARGET"
else
    echo "⚠️ WARNING: node_modules is a physical folder or missing. This 
usually breaks CloudLinux builds."
fi

# 4. Check for .next cache issues
if [ -d ".next" ]; then
    echo -e "\n[4] Found existing .next build folder. Recommended: 'rm -rf 
.next' before building."
fi

echo -e "\n--- End of Diagnostic ---"
